import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { apolloUri } = Constants.manifest.extra;

const httpLink = createHttpLink({
  uri: apolloUri
});

const createApolloClient = (authStorage) => {
  const auhtLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          auhtorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers
      }
    }
  })
  return new ApolloClient({
    link: auhtLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export default createApolloClient;