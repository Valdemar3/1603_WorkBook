import BasePage from "./BasePage"

class AccountPage extends BasePage{

    visit(){
        cy.log('**Open web site Login Pgae**')
        cy.visit('/index.php?rt=account/account')
    }

    verifyLoginPage(loging) {
        cy.get('h1 span.subtext').should('contain', loging.firstName)
    }
}
export default new AccountPage()