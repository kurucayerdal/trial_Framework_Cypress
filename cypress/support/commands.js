// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



  // for mochawesome report
  import addContext from 'mochawesome/addContext';

  Cypress.on('test:after:run', (test, runnable) =>{
    if (test.state === "failed") {    
      const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;    
      addContext({ test }, screenshot);  
    }
  });


// ça marche mais une exeption
// Cypress.Commands.add("addScreenshot", () =>
// {
//     const screenshot = cy.screenshot('screenshot');
//     addContext({test}, screenshot );
// });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    cy.log(err.message);
    return false;
  });


// ça marche mais une exeption
// Cypress.Commands.add("addScreenshot", () =>
// {
//     const screenshotFile =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (screenshot)`; 
//     const screenshot = cy.screenshot(screenshotFile);
//     cy.once('test:after:run', (runnable, test)=>{
//         addContext( {test} , screenshot);
//     })
// });

