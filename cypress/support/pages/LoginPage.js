import BasePage from "./BasePage"

class LoginPage extends BasePage{

    // constructor() {
    //     this.loginField = '#loginFrm_loginname'
    //     this.paswordField = '#loginFrm_password'
    //     this.submitButton = 'button[type="Submit"]'

    // }

    visit(){
        cy.log('**Open web site Login Pgae**')
        cy.visit('/index.php?rt=account/login')
    }

    getLoginField() {
        return cy.get('#loginFrm_loginname')
    }

    getPasswordField() {
        return cy.get('#loginFrm_password')
    }

    getSubmitButton() {
        return cy.get('button[type="Submit"]').contains('Login')
    }

    assertUserUnathorized() {
        cy.log('**Verify User is Unauthorized**')
        cy.getCookie('customer').should('be.null')
        cy.log('**User is Unauthorized OK**')

    }

    submitLognForm(loging) {
        cy.log('**Trying to Login**')

        this.getLoginField().type(loging.loginName)
        this.getPasswordField().type(loging.pasw)
        this.getSubmitButton().click()

    }
}
export default new LoginPage()