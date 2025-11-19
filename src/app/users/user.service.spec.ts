import { TestBed } from '@angular/core/testing';
// Main API to write tests in ANgular is TestBed
import { UserService } from './user.service';

describe('UserService', () => {
  
  let service: UserService;

  beforeEach(() => {
    // Creatuing testing enviroment
    TestBed.configureTestingModule({})
    // Create a new fresh instance of the userservice before each test
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    // Assert that it exists
    expect(service).toBeTruthy();
  })

  it('should getusers', () =>{
    // Whatever is returned's length should not be empty
    service.getUsers().subscribe( users  => {
      expect(users.length).toBeGreaterThan(0)
    } )
  })

  
});
