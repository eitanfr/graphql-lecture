import { ApolloClient, createNetworkInterface, IntrospectionFragmentMatcher } from 'apollo-client';
// const wsClient = new SubscriptionClient(environment.subscriptionServer + '/subscriptions', {
//   reconnect: true,
//   connectionParams: {}
// });
//
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
});
const apolloClient = new ApolloClient({
    networkInterface,
});

export function getApolloClient() {
    return apolloClient;
}
