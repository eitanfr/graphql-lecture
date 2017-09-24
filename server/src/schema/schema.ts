import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { myScheme } from './types';
import * as faker from 'faker';
import { resolverMap } from './resolvers';
import { GraphQLSchema } from 'graphql';

// Craete scheme
export const schema: any = makeExecutableSchema({
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
//  }
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