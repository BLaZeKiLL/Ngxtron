import { getGreeting } from '../support/app.po';

describe('browser', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to browser!');
  });
});
