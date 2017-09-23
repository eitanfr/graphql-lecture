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
  age?: number; 
  friends?: User[]; 
}
export interface UserQueryArgs {
  id: string; 
}
export interface UserByNameQueryArgs {
  name?: string; 
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
  } 
}
