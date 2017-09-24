import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFriendDialogComponent } from './new-friend-dialog.component';

describe('NewFriendDialogComponent', () => {
  let component: NewFriendDialogComponent;
  let fixture: ComponentFixture<NewFriendDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFriendDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFriendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
