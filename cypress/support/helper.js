//import * as loging from '../fixtures/loging.json';

export function loginViaUI_l(loging) {
    cy.log('**Open web home page**')
    cy.visit('/')
    
    cy.log('**Logged in**')
    cy.get('a:contains("Login or register")').click()
    cy.get('#loginFrm_loginname').type(loging.loginName)
    cy.get('#loginFrm_password').type(loging.pasw)
    cy.get('button[title="Login"]').click()
}

export function headlessLogIn(loging) {

    let csrftoken,
        csrfinstance;

cy.log('**send request without opening web page in broweser**')
cy.request('GET', '/index.php?rt=account/login').then( response =>{
  /// we are getting token
  let htmlResp = document.createElement('html')
  htmlResp.innerHTML = response.body
  csrftoken = htmlResp.querySelector('#loginFrm [name="csrftoken"]')
    .getAttribute('value')
  csrfinstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]')
    .getAttribute('value')
})
.then( () => {
  cy.log('**Sendind user data for LoggedIn**')
  cy.request(
    {
    method: 'POST',
    url: '/index.php?rt=account/login',
    body: {
      csrftoken: csrftoken,
      csrfinstance: csrfinstance,
      loginname: loging.loginName,
      password: loging.pasw ,
    },
    form: true
    }
  )

})
}

// export function someLoginViaAPI() {

//       //for normal web site
//   let token;

//   cy.request(
//     {
//     method: 'POST',
//     url: '/index.php?rt=account/login',
//     body: {
//       loginname: loging.loginName,
//       password: loging.pasw ,
//     }
//     }
//   ).then (response => {
//     token = response.body.token
//     cy.setCookie('cookies NAME', response.body.token)
//     window.localStorage.setItem('cookies NAME', response.body.token)
//     window.sessionStorage.setItem('cookies NAME', response.body.token)

//   })

// }