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

import { contains } from "../../node_modules/cypress/types/jquery/index"
import { onPrivacyPage } from "../pages/privacy/privacy_page"
//

Cypress.Commands.add('navigateToMap', () => {

    const location = Cypress.env('location')
    cy.clearCookies()
    cy.visit('/')
    cy.log(location)
    if (location !== "North America" && location !== "Asia") {
        onPrivacyPage.form.click.acceptAll()
    }
    cy.url().should('not.contain', 'consent')
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })