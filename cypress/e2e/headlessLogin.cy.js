///<reference types="cypress"/>

import * as loging from '../fixtures/loging.json'
import { headlessLogIn } from '../support/helper'

describe ('16_02_23', () => {
  
  beforeEach ('Autoriz', () => {
    headlessLogIn(loging)
  })
  
    it(' Cheching User Name', ()=>{
      cy.log('**checking if user LoggedIn**')
      cy.visit('/index.php?rt=account/account')
      cy.get('div.menu_text')
        .should('contain', loging.firstName)
    })

    it('Cheicking History page', () => {
      cy.log('**checking UserHistory**')
      cy.visit('index.php?rt=account/history')
      cy.get('div.menu_text')
        .should('contain', loging.firstName)
    })
})
