import { friendsQuery } from '../graphql/friends.query';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Apollo } from 'apollo-angular/build/src';
import { GetFriends } from '../graphql/types/types';
import { NewFriendDialogComponent } from '../new-friend-dialog/new-friend-dialog.component';
import { MdDialog } from '@angular/material';
import UserByName = GetFriends.UserByName;

@Component({
  selector: 'friends-list',
  template: `
    <h3>You have {{friends?.length}} Friends</h3>
    <h2 *ngIf="friends?.length < 2">Loser!!!</h2>
    <button md-raised-button (click)="openNewFriendDialog()"> add friend</button>
    <div fxLayout="row" fxLayoutWrap>
      <user-card *ngFor="let user of friends" [friend]="user"></user-card>
    </div>
  `,
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit, OnChanges {

  @Input()
  userName: string;

  friends: GetFriends.Friends[];
  user: UserByName;

  constructor(private apollo: Apollo, private dialogs: MdDialog) {
  }

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
        this.user = result.data.userByName;
      })

    }
  }

  openNewFriendDialog(){
    this.dialogs.open(NewFriendDialogComponent,{
      data: this.user,
    });
  }

}
