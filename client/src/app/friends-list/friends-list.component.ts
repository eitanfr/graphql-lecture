import { Query, GetFriends, User } from './../graphql/types/types';
import { friendsQuery } from './../graphql/friends.query';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Apollo } from "apollo-angular/build/src";

@Component({
  selector: 'friends-list',
  template: `
  <div fxLayout="row">
    <user-card *ngFor="let user of friends" [friend]="user"></user-card>
    </div>
  `,
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit, OnChanges {

  @Input()
  userName: string;

  friends: GetFriends.Friends[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['userName'].isFirstChange()) {
      const friendsSubscription = this.apollo.watchQuery<GetFriends.Query>({
        query: friendsQuery,
        variables: {
          name: this.userName
        } as GetFriends.Variables
      });

      friendsSubscription.subscribe(result => {
        this.friends = result.data.userByName.friends;
        console.log(this.friends);
      })

    }
  }

}
