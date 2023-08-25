import { defineConfig } from "cypress"

export default defineConfig({
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    includeShadowDom: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    e2e: {
        setupNodeEvents(on, config) {
            // if version is not loaded use local
            const version = config.env.version || 'local'
            // load env from json
            config.env = require(`./cypress/config/${version}.json`)
            config.baseUrl = config.env.baseUrl

            return config;

        },
    }
})