import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import Constants from 'expo-constants';

const httpLink = createHttpLink({
  // uri: 'http://192.168.123.39:4000/graphql'
  uri: Constants.manifest.extra.apolloUri
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })
}

export default createApolloClient;