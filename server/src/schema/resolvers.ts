import { Friend, FRIENDS } from '../data/my-data';
import { pubsub } from './pubsub';

export const resolverMap = {
  Query: {
    users: () => FRIENDS,
    userByName: (rootValue, args, context) => FRIENDS.find(friend => friend.firstName === args.name),
  },
  User: {
    // Or any other data source (REST,DB...)
    friends: (rootValue: Friend) => rootValue.friendsIds.map(id => FRIENDS.find(f => f.id === id)),
  },










  Mutation: {
    addFriend: (root,args)=> {
      const {userId, friendInput} = args;
      const newFriend = {
        id: FRIENDS.length,
        ...friendInput
      };

      // update logic
      FRIENDS.push(newFriend);
      const userToUpdate = FRIENDS.find(user=> user.id === userId);
      userToUpdate.friendsIds.push(newFriend.id);

      // pubsub.publish('friendAdded', { friendAdded: newFriend});
      return newFriend;
    }
  },







  Subscription: {
    friendAdded: {
      subscribe: () => pubsub.asyncIterator('friendAdded')
    }
  },
};