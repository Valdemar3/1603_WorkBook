export function loggedInFunc(forHoweWork1602) {
    //Logged in
    cy.log('**Call Loggedin Function**')
    cy.visit('/')
    cy.get('#customer_menu_top').click()
    cy.get('#loginFrm_loginname').type(forHoweWork1602.loginName)
    cy.get('#loginFrm_password').type(forHoweWork1602.pasw)
    cy.get('[title="Login"]').click()
    //Checking that loginign was sucsessful
    cy.log('**Checking that loginign was sucsessful**')
    cy.get('div.menu_text').should('contain.text', 'Welcome back Tony')
}

export function searchFunc(forHoweWork1602) {
        //Find searching input and type E and search
        cy.log('**Find searching input and type E and search **')
        cy.get('#search_form').type(forHoweWork1602.searchingWord).submit()
}