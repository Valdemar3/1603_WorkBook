//importing datas from fixtures
import * as forHoweWork1602 from '../fixtures/forHoweWork1602.json'
import { loggedInFunc, searchFunc, findFunc, productFinderWithRecursion, bookProduct } from '../support/helperHoweWork1602'


describe ('Test Suite for AutomStore', () => {
 
    it('LoggedIn, Find, Book of a Good', () => {

    //Call LoggedIn Function
    loggedInFunc(forHoweWork1602)
    
    //Call Searching Function
    searchFunc(forHoweWork1602)
    
    //findFunc(forHoweWork1602) //Problem is that function isnt stopping when I am on the good's page

    //Producfinder function RECURSION
    productFinderWithRecursion(forHoweWork1602)
    
    //Make order
    cy.log('**Call Order Function**')
    bookProduct()
    //orderFunc()  
    })
    
    
    

})