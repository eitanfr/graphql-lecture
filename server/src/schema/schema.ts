import { resolverMap } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { myScheme } from './types';
import { GraphQLSchema } from 'graphql';

// Craete scheme
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: myScheme,
  resolvers: resolverMap,
});

// Add mock data
// addMockFunctionsToSchema({ schema });

// Add custom mocks
// const mocks = {
//     User: ()=> ({
//         firstName: ()=> faker.name.firstName(),
//         lastName: ()=> faker.name.lastName(),
//         picUrl: ()=> faker.image.avatar()
//     }),
// }
// addMockFunctionsToSchema({ schema, mocks });































// const mocks = {
//     User: ()=> ({
//         firstName: ()=> faker.name.firstName(),
//         lastName: ()=> faker.name.lastName(),
//         picUrl: ()=> faker.image.avatar()
//     }),
//     BankAccount: ()=> ({
//         money: ()=> 100000000,
//     })
// }