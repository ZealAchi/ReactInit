import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql/",
});
const client = new ApolloClient({
  link: httpLink,
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
