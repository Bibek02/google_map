export function getById(elementId: string, timeout?: number): Cypress.Chainable<JQuery> {
    if (timeout) {
        return cy.get(`[id="${elementId}"]`, {
            timeout: timeout
        });
    } else {
        return cy.get(`[id="${elementId}"]`)
    }
}
export function getByTag(elementTag: string, timeout?: number): Cypress.Chainable<JQuery> {
    if (timeout) {
        return cy.get(`${elementTag}`, {
            timeout: timeout
        });
    } else {
        return cy.get(`${elementTag}`)
    }
}