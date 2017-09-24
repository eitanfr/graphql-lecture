import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Apollo } from 'apollo-angular';
import { addFriendMutation } from '../graphql/add-friend.muation';
import { AddFriendMutation, GetFriends } from '../graphql/types/types';
import { friendsQuery } from '../graphql/friends.query';

@Component({
  selector: 'app-new-friend-dialog',
  templateUrl: './new-friend-dialog.component.html',
  styleUrls: ['./new-friend-dialog.component.css']
})
export class NewFriendDialogComponent implements OnInit {
  friendForm: FormGroup;
  currentUser: GetFriends.UserByName;

  constructor(private fb: FormBuilder,
              private dialogRef: MdDialogRef<NewFriendDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: GetFriends.UserByName,
              private apollo: Apollo) {
    this.currentUser = data;
    this.friendForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: '',
    })
  }

  onSubmit() {
    const friendModel = this.friendForm.value;

    this.apollo.mutate<AddFriendMutation.Mutation>({
      mutation: addFriendMutation,
      variables: {
        userId: this.currentUser.id,
        friendInput: {
          ...friendModel
        }
      } as AddFriendMutation.Variables,
      update: (store, mutationResult) => {
        // Read the data from our cache for this query.
        const data = store.readQuery<GetFriends.Query>({
          query: friendsQuery,
          variables: {
            name: this.currentUser.firstName,
          }
        });
        // Write our friend back to the cache.
        data.userByName.friends.push(mutationResult.data.addFriend);
        // Write our data back to the cache.
        store.writeQuery({
          query: friendsQuery,
          variables: {name: this.currentUser.firstName},
          data
        })
      }
    }).subscribe();

    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
