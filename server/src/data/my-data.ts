import * as faker from 'faker';

export interface Friend {
    id:string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    picUrl: string;
    age: number;
    friendsIds: string[]; 
}

export const FRIENDS: Friend[] = [
    {
        id: '1',
        firstName: 'eitan',
        lastName: 'fr',
        age: 10,
        friendsIds: ['2','3','4'],
        avatarUrl: faker.image.avatar(),
        picUrl: faker.image.people(),
    },
    {
        id: '2',
        firstName: 'tomer',
        lastName: 'fri',
        age:22,
        friendsIds: [],
        avatarUrl: faker.image.avatar(),
        picUrl: faker.image.people(200,),
    },
    {
        id: '3',
        firstName: 'dotan',
        lastName: 'frili',
        age: 33,
        friendsIds: ['4','1'],
        avatarUrl: faker.image.avatar(),
        picUrl: faker.image.people(600,),
    },
    {
        id: '4',
        firstName: 'shoval',
        lastName: 'frilich',
        age: 23,
        friendsIds: ['1','3'],
        avatarUrl: faker.image.avatar(),
        picUrl: faker.image.people(),
    },
];