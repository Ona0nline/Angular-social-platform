import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents()

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService)
    // Spying on our real user service instance
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of ([
      {id:1, name: "John"},
      {id:2, name: "Maria"}
    ]))


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retreive users from the user service onint', () => {
    // Starts life cycle hook
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })
});
