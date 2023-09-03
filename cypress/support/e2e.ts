// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
}
//Disabled xhr log view :https://stackoverflow.com/questions/71357705/hide-xhr-calls-on-cypress-test-runner

Cypress.on('uncaught:exception', (e) => {
    if (
        //included cuz make test error
      e.message.includes("Cannot read properties of null (reading 'postMessage')")
    ) {
      // we expected this error, so let's ignore it and let the test continue
      return false;
    }
})

// Alternatively you can use CommonJS syntax:
// require('./commands')