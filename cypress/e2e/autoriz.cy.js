///<reference types="cypress"/>

import * as loging from '../fixtures/loging.json'
import { loginViaUI_l } from '../support/helper'

describe ('16_02_23', () => {
    // beforeEach('Visit main page',()=>{
    //     cy.log('**Open web home page**')
    //     cy.visit('/')
    // })
    it.skip('Registration', ()=> {  
      cy.log('**Search Login form and Register**')
      cy.get('a:contains("Login or register")').click()

      cy.log('**Choose Registaration**')
      cy.get('button[title="Continue"]').click()

      cy.log('**Fill in inputs and other registation informantion**')
      cy.get('#AccountFrm_firstname')
        .type(loging.firstName)
      cy.get('#AccountFrm_lastname')
        .type(loging.lastName)
      cy.get('#AccountFrm_email')
        .type(loging.email)
      cy.get('#AccountFrm_address_1')
        .type(loging.adress1)
      cy.get('#AccountFrm_country_id')
        .select(loging.Country)
      cy.get('#AccountFrm_zone_id')
        .select(loging.regionState)
        // cy.get('#AccountFrm_zone_id').select(2, {force:true}) - flow from Sanitasky
        // .invoke('val')
        // .should('not.eq', 'FALSE')
      cy.get('#AccountFrm_city')
        .type(loging.city)
      cy.get('#AccountFrm_postcode')
        .type(loging.zipCode)
      cy.get('#AccountFrm_loginname')
        .type(loging.loginName)
      cy.get('#AccountFrm_password')
        .type(loging.pasw)
        // cy.get('#AccountFrm_password').then(el => {
        //     pass = el.text
        // })
      cy.get('#AccountFrm_confirm').clear()
        .type(loging.pasw)
      cy.get('#AccountFrm_agree').check()
      cy.get('button.btn.btn-orange.pull-right').click()

      cy.log('**Check User is LoggedIn after Registation**')
      cy.get('div.menu_text')
        .should('contain', loging.firstName)
      
      cy.log('**Logout**')
      cy.get('#customer_menu_top ul.sub_menu.dropdown-menu').click({force: true})
      cy.get('#customer_menu_top ul.sub_menu li.dropdown').last().click()

       console.log(loging)
    })
    it('Autorization', ()=>{
      
      loginViaUI_l(loging)

        cy.log('**Open Main page**')
        cy.get('img[title="Automation Test Store"]').click()

        cy.log('**Choose goods**')
        cy.get('#block_frame_latest_1770 i.fa')
            .eq(0)
            .click()
        cy.get('div.block_7 li.dropdown').click()

        cy.log('**Checkout page**')
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()

        cy.log('**Return to main page**')
        cy.get('a[title="Continue"]').click()


    })
})



// {
//     "firstName": "jack4",
//     "lastName": "Niklson",
//     "email": "jack4@rer.com",
//     "adress1": "FuckStreet",
//     "city": "Fucking city",
//     "regionState": "Grevenmacher",
//     "zipCode": "1234321",
//     "Country": "Luxembourg",
//     "loginName": "jack4rercom",
//     "pasw": "qwerty",
//     "paswConf": "qwerty"
//   }