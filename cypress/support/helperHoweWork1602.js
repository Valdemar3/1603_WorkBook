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

export function productFinderWithRecursion (forHoweWork1602) {
    cy.get('body').then((body) => {
        if (body.find(`[title="${forHoweWork1602.nameOfGood4}"]`).length > 0) {
            cy.get(`[title="${forHoweWork1602.nameOfGood4}"]`).click()
            cy.log('**BINGO**')
        } else {
            cy.log('**NOT BINGO**')
            cy.get('.pagination a[href]').contains('>').click()
            productFinderWithRecursion(forHoweWork1602)
        }
    })
}

export function bookProduct () {
    cy.get('.productpagecart').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    //checkin for succces of order
    cy.get('.maintext').contains('Your Order Has Been Processed!')
}

//Problem is that function isnt stopping when I am on the good's page

// export const productFinder = (forHoweWork1602) => {
//     cy.get('.pull-right .pagination').find('li').then(elm => {
//         //
//         for (let i = 0; i < elm.length; i++) {
//             cy.get(".prdocutname").then(($a) => {
//                 if ($a.text().includes(`${forHoweWork1602.nameOfGood4}`)) {
//                     cy.get(`[title="${forHoweWork1602.nameOfGood4}"]`).click()
//                     cy.log('***FOUND***')
//                 } else {
//                     cy.get('.mat-paginator-navigation-next')
//                 }
//             })
//         }
//     })
// }

//Problem is that function isnt stopping when I am on the good's page
// export function findFunc(forHoweWork1602) {
//     //cycle for finding Good
//     cy.get('.pagination').find('li').then (findGood => {
        
//         for (let i=1; i<=findGood.length; i++)
//             cy.get('.prdocutname').then(mMatch => {
//                 if (mMatch.text().includes(forHoweWork1602.nameOfGood4) ) {
//                     cy.get(`[title="${forHoweWork1602.nameOfGood4}"]`).click()
//                     cy.log('**Bingo**',i)
                    
//                 } 
//                 else { 
//                     cy.log('**NOT Bingo**',i,findGood.length)
//                     cy.get('.pagination a[href]').contains('>').click()
//                         }
//         })
//     }
// )}

//Problem is that function isnt stopping when I am on the good's page
// export function findFunc(forHoweWork1602) {
//     //cycle for finding Good
//     cy.get('.pagination').find('li').then (findGood => {
//         for (let i=1; i<=findGood.length; i++) {
//             cy.get('.prdocutname').then(mMatch => {
//                 if (mMatch.text().includes(forHoweWork1602.nameOfGood4))
//                 {
//                     cy.get(`[title="${forHoweWork1602.nameOfGood4}"]`).click()
//                     cy.log('**Bingo**')
                    
//                     //calling buyin function
        
//                 }
//                 else {
//                     cy.log('**NOT Bingo**')
//                     cy.get('.pagination a[href]').contains('>').click()
//                     findFunc(forHoweWork1602)
//                 }
//             })
            
//         }
//     })  
           
// }