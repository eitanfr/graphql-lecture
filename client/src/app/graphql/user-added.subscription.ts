import gql from 'graphql-tag';

export const userAddSubscription = gql`
  subscription {
    friendAdded {
      lastName
      firstName
      id
    }
  }
`;
