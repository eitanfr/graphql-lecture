/* tslint:disable */

export interface Query {
  users?: User[]; 
  user?: User; 
  userByName?: User; 
}

export interface User {
  id: string; 
  firstName?: string; 
  lastName?: string; 
  picUrl?: string; 
  avatarUrl?: string; 
  age?: number; 
  friends?: User[]; 
}

export interface Mutation {
  addFriend?: User; 
}

export interface FriendInput {
  firstName: string; 
  lastName: string; 
  picUrl?: string; 
  avatarUrl?: string; 
  age?: number; 
}
export interface UserQueryArgs {
  id: string; 
}
export interface UserByNameQueryArgs {
  name?: string; 
}
export interface AddFriendMutationArgs {
  userId: string; 
  friendInput: FriendInput; 
}
export namespace AddFriendMutation {
  export type Variables = {
    userId: string;
    friendInput: FriendInput;
  }

  export type Mutation = {
    addFriend?: AddFriend; 
  } 

  export type AddFriend = {
    id: string; 
    firstName?: string; 
    lastName?: string; 
  } 
}
export namespace GetFriends {
  export type Variables = {
    name: string;
  }

  export type Query = {
    userByName?: UserByName; 
  } 

  export type UserByName = {
    id: string; 
    firstName?: string; 
    lastName?: string; 
    picUrl?: string; 
    age?: number; 
    friends?: Friends[]; 
  } 

  export type Friends = {
    picUrl?: string; 
    firstName?: string; 
    lastName?: string; 
    avatarUrl?: string; 
  } 
}
