/// <reference types="Cypress" />


// describe("Mobile phone replenishment", () => {

//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });

// });

// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// });

// // it.only('By Class', () =>{
// //     cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
// //     cy.get('.w-full mx-8 lg:m-0 lg:w-1/5')
// // });

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
//     cy.get('nav')
// });

// it('By Tag value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// });

// it('By Different Tag', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it.only('By Different Types', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

//comment for git

it.only('Using Get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});
