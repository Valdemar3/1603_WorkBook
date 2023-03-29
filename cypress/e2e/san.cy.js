import* as user from '../fixtures/user.json';

it ('Order'
    cy.request ( 'GET','/index.php?rt=account/login'). then( response =>{

    }).then ( () => {
        cy. request ({
            method: 'POST', 
            url: '/index.php?rt=account/login',
            body: {
            loginname: user. username, 
            password: user.password, 
            csrfinstance: '',
            csrftoken: '',
form: true

cy.visit ('/index.php?rt=account/account' ) ;
cy. log ('**Verify user first name on account page**");
cy.get ('h1 span. subtext', {timeout: 20000]) . should ('contain', user.firstName) ;
})