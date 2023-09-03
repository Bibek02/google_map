
Cypress.Commands.add('navigateToMap', () => {
    const region = Cypress.env('region')

    cy.clearCookies()
    cy.log(region)
    
    if (region !== "North America" && region !== "Asia") {
    const gl = Cypress.env('gl')
    const hl = Cypress.env('hl')
    const consent = Cypress.env('consent')
    const baseUrl = Cypress.env('baseUrl')
    const body = new URLSearchParams()
    body.append( "gl", gl)
    body.append( "m", "0")
    body.append( "pc","m")
    body.append( "continue", baseUrl)
    body.append( "x" , "6")
    body.append( "bl", "boq_identityfrontenduiserver_20230829.07_p1")
    body.append( "hl", hl)
    body.append( "set_eom", "true")
    cy.visit('/').then(_ => {
        cy.request({
            method : 'POST',
            url: consent,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: Object.fromEntries(body),
            }).then((res) => {
                expect(res.status).to.eq(200)
            })
            //onPrivacyPage.form.click.declineAll()
    })
}
    cy.visit('/')
    cy.url().should('not.contain', 'consent')
})
