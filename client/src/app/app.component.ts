import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { Component, AfterContentInit } from '@angular/core';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  userName: string;

  constructor(private dialogs: MdDialog) { }

  openDialog() {
    const dialogRef = this.dialogs.open(WelcomeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
    });
  }

  ngAfterContentInit(): void {
    setTimeout(() => this.openDialog(), 0);
  }
}
