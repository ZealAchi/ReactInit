import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';




// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token
//     }
//   }
// });

const httpLink = createHttpLink({
  uri: "http://192.168.6.57:3001/graphql",
});
const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link:httpLink,
  cache: new InMemoryCache(),
  
  onError: ({ networkError }) => {
    if (networkError) {
      console.log("Network Error", networkError);
    }
  },
  headers: {
    authorization: localStorage.getItem("token"),
  },
});

export default client;
