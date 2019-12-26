import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";


const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
  fetchOptions:{
		credentials:'include'
	},
	request: opertation=>{
    const token=localStorage.getItem('token');
		opertation.setContext({
			headers:{
				authorization:token
			}
		})
	},
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
