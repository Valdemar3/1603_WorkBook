export function loginViaUI_u(user) {
    cy.log('**Open web home page**')
    cy.visit('/')
    
    cy.log('**Logged in**')
    cy.get('a:contains("Login or register")').click()
    cy.get('#loginFrm_loginname').type(user.loginNa)
    cy.get('#loginFrm_password').type(user.pasw)
    cy.get('button[title="Login"]')
}