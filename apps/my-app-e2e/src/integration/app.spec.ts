/// <reference types="cypress" />

import { getGreeting } from '../support/app.po';
import { user } from '@farm/fixtures';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains(user.name);
  });
});
