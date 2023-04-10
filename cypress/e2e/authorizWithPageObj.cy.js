import * as loging from '../fixtures/loging.json'
import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'

it('Authorization', () => {

    loginPage.visit()
    loginPage.submitLognForm(loging)

    accountPage.verifyLoginPage(loging)


})