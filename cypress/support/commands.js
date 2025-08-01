// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// EXEMPLO DE COMANDO SEM PARÂMETROS
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
//     cy.get('#firstName')
//       .as('fn')
//       .should('be.visible')
//       .type('Jefferson', { delay: 0})

//     cy.get('@fn')
//       .should('be.visible')
//       .should('have.value', 'Jefferson')
    
//     cy.get('#lastName')
//       .as('ln')
//       .should('be.visible')
//       .type('Borges', { delay: 0})

//     cy.get('@ln')
//       .should('be.visible')
//       .should('have.value', 'Borges')
    
//     cy.get('#email')
//       .as('email')
//       .should('be.visible')
//       .type('jeff@example.com', { delay: 0})

//     cy.get('@email')
//       .should('be.visible')
//       .should('have.value', 'jeff@example.com')
    
//     cy.get('#open-text-area')
//       .as('ota')
//       .should('be.visible')
//       .type('Mensagem de teste, preenchendo o campo text area.', { delay: 0})

//     cy.get('@ota')
//       .should('be.visible')
//       .should('have.value', 'Mensagem de teste, preenchendo o campo text area.')

//     cy.get('.button')
//       .should('be.visible')
//       .click()
// })

// EXEMPLO DE COMANDO COM PAÂMETROS
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ({ firstName, lastName, email, message }) => {
//     cy.get('#firstName')
//       .as('fn')
//       .should('be.visible')
//       .type(firstName, { delay: 0})

//     cy.get('@fn')
//       .should('be.visible')
//       .should('have.value', firstName)
    
//     cy.get('#lastName')
//       .as('ln')
//       .should('be.visible')
//       .type(lastName, { delay: 0})

//     cy.get('@ln')
//       .should('be.visible')
//       .should('have.value', lastName)
    
//     cy.get('#email')
//       .as('email')
//       .should('be.visible')
//       .type(email, { delay: 0})

//     cy.get('@email')
//       .should('be.visible')
//       .should('have.value', email)
    
//     cy.get('#open-text-area')
//       .as('ota')
//       .should('be.visible')
//       .type(message, { delay: 0})

//     cy.get('@ota')
//       .should('be.visible')
//       .should('have.value', message)

//     cy.get('.button')
//       .should('be.visible')
//       .click()
// })

// EXEMPLO DE COMANDO COM PARÂMETROS E VALORES PRÉ DEFINIDOS
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {}) => {

    const {
        firstName = 'Jefferson',
        lastName = 'Borges',
        email = 'jeff@example.com',
        message = 'Mensagem de teste!',
    } = data

    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      .type(firstName, { delay: 0})

    cy.get('@fn')
      .should('be.visible')
      .should('have.value', firstName)
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type(lastName, { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', lastName)
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type(email, { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', email)
    
    cy.get('#open-text-area')
      .as('ota')
      .should('be.visible')
      .type(message, { delay: 0})

    cy.get('@ota')
      .should('be.visible')
      .should('have.value', message)

    cy.contains('.button', 'Enviar')
      .should('be.visible')
      .click()
})