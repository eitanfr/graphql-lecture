import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, } from '@angular/material';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { getApolloClient } from './graphql/client/apollo-client';
import { ApolloModule }  from 'apollo-angular';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewFriendDialogComponent } from './new-friend-dialog/new-friend-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    WelcomeDialogComponent,
    FriendsListComponent,
    NewFriendDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ApolloModule.forRoot(getApolloClient),
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents:[WelcomeDialogComponent, NewFriendDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
