
import gql from 'graphql-tag';
export const myScheme = gql`
    schema {
        query: Query
        mutation: Mutation 
    }
    type Query {
        users: [User]
        user(id: ID!): User
        userByName(name: String): User
    }
    
    type User {
        id: ID!
        firstName: String
        lastName: String
        picUrl: String
        avatarUrl: String
        age: Int
        friends: [User] # List of friends 
    }

    type Mutation {
        addFriend(userId: ID!, friendInput: FriendInput!): User
    }
  
    input FriendInput {
        firstName: String!
        lastName: String!
        picUrl: String
        avatarUrl: String
        age: Int
    } 
  
`;


















































// export const myScheme = gql`
// type Query {
//     users: [User]
//     user(id: ID!): User
// }
// type User {
//     id: ID!
//     firstName: String
//     lastName: String
//     picUrl: String
//     age: Int
//     friends: [User] # List of friends
//     bankAccount: BankAccount
// }

// type BankAccount {
//     money: Int
//     bankName: String
// }
// `;