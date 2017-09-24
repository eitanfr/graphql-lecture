import gql from 'graphql-tag';

export const addFriendMutation = gql`
  mutation AddFriendMutation ($userId: ID!, $friendInput: FriendInput!) {
    addFriend(userId: $userId ,friendInput: $friendInput){
      id
      picUrl
      firstName
      lastName
      avatarUrl
      age
    }
  }
`;
