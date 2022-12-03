import '../styles/globals.css'
import { ApolloProvider , ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        notes: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});


const client = new ApolloClient({
  uri:'https://notes-app-backend-production.up.railway.app/graphql',
  cache,
});



function MyApp({ Component, pageProps }) {




  return (
    <ApolloProvider client={client}>
<Component {...pageProps} />
    </ApolloProvider>

) 
}

export default MyApp
