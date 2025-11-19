import { AppComponent } from "./app.component";

// Creating test suite
describe('AppComponent', () => {

  // Creating the unit test, describing it to specify outcome
  it('It should have a defined title', () => {
    // Creating instance of our component
    const component = new AppComponent()
    // Assertion
    expect(component.title).toBeDefined()
  });

});