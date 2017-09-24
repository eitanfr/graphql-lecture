import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { addGraphQLSubscriptions, SubscriptionClient } from 'subscriptions-transport-ws';


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
});

const wsClient = new SubscriptionClient('ws://localhost:3000/subscriptions', {
  reconnect: true,
  connectionParams: {}
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);


const apolloClient = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions,
});

export function getApolloClient() {
    return apolloClient;
}



