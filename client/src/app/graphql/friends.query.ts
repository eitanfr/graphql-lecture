import gql from 'graphql-tag';

export const friendsQuery = gql`
    query getFriends($name: String!){
        userByName(name: $name){
            id
            firstName
            lastName
            picUrl
            age
            friends {
              picUrl
              firstName
              lastName
              avatarUrl
            }
          }
    }
`;