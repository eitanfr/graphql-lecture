import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  userName: string;

  ngAfterViewInit(): void {

  }
  constructor(private dialogs: MdDialog) { }
  ngOnInit(): void {


  }

  openDialog() {
    const dialogRef = this.dialogs.open(WelcomeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;

      console.log( this.userName)
    });
  }

  ngAfterContentInit(): void {
    setTimeout(() => this.openDialog(), 0);
  }
}
