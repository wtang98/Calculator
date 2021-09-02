"use strict";

describe('The Main Page', function () {
  it('Successfully loads', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
  });
});
describe('plus operations', function () {
  it('7+2 equals 9', function () {
    //Arrange 
    cy.visit('http://127.0.0.1:5502/index.html'); //Act

    cy.get('[data-cy = seven]').click();
    cy.get('[data-cy = plus]').click();
    cy.get('[data-cy = two]').click();
    cy.get('[data-cy = equals]').click(); //Assert

    cy.get('[data-cy = output]').should('contain', '9');
  });
});
describe('minus operations', function () {
  it('8-9 equals -1', function () {
    //Arrange 
    cy.visit('http://127.0.0.1:5502/index.html'); //Act

    cy.get('[data-cy = eight]').click();
    cy.get('[data-cy = minus]').click();
    cy.get('[data-cy = nine]').click();
    cy.get('[data-cy = equals]').click(); //Assert

    cy.get('[data-cy = output]').should('contain', '-1');
  });
});
describe('times operations', function () {
  it('9*9 equals 81', function () {
    //Arrange 
    cy.visit('http://127.0.0.1:5502/index.html'); //Act

    cy.get('[data-cy = nine]').click();
    cy.get('[data-cy = times]').click();
    cy.get('[data-cy = nine]').click();
    cy.get('[data-cy = equals]').click(); //Assert

    cy.get('[data-cy = output]').should('contain', '81');
  });
});
describe('divide operations', function () {
  it('98/2 equals 49', function () {
    //Arrange 
    cy.visit('http://127.0.0.1:5502/index.html'); //Act

    cy.get('[data-cy = nine]').click();
    cy.get('[data-cy = eight]').click();
    cy.get('[data-cy = divide]').click();
    cy.get('[data-cy = two]').click();
    cy.get('[data-cy = equals]').click(); //Assert

    cy.get('[data-cy = output]').should('contain', '49');
  });
});
describe('complex chain', function () {
  it('98/2+1 equals 50', function () {
    //Arrange 
    cy.visit('http://127.0.0.1:5502/index.html'); //Act

    cy.get('[data-cy = nine]').click();
    cy.get('[data-cy = eight]').click();
    cy.get('[data-cy = divide]').click();
    cy.get('[data-cy = two]').click();
    cy.get('[data-cy = plus]').click();
    cy.get('[data-cy = one]').click();
    cy.get('[data-cy = equals]').click(); //Assert

    cy.get('[data-cy = output]').should('contain', '50');
  });
});