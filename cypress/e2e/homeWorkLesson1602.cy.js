//importing datas from fixtures
import * as forHoweWork1602 from '../fixtures/forHoweWork1602.json'
import { loggedInFunc, searchFunc } from '../support/helperHoweWork1602'


describe ('Test Suite for AutomStore', () => {
 
    it('LoggedIn', () => {

    //Call LoggedIn Function
    loggedInFunc(forHoweWork1602)
    
    //Call Searching Function
    searchFunc(forHoweWork1602)
    
    //Find Name of goods with IF operator
    cy.log('**Call Finding Function**')
    cy.get('.prdocutname').should('be.visible')
        .and('have.attr','title')
        .and('have.value', forHoweWork1602.nameOfGood)
    
    // findFunc()
    
    //Make order
    cy.log('**Call Order Function**')
    //orderFunc()  
    })
    
    
    

})