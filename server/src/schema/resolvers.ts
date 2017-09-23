import { FRIENDS, Friend } from './../data/my-data';
export const resolverMap = {
    Query: {
        users: ()=> FRIENDS,
        userByName: (rootValue,args,context)=> FRIENDS.find(friend=> friend.firstName === args.name),
    },
    User: {
        friends: (rootValue: Friend)=> rootValue.friendsIds.map(id=> FRIENDS.find(f=> f.id === id)),
    }
};