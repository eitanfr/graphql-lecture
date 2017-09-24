import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { addGraphQLSubscriptions, SubscriptionClient } from 'subscriptions-transport-ws';


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
});



const apolloClient = new ApolloClient({
    networkInterface: networkInterface,
});

export function getApolloClient() {
    return apolloClient;
}





// const wsClient = new SubscriptionClient('ws://localhost:3000/subscriptions', {
//   reconnect: true,
//   connectionParams: {}
// });
//
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );




