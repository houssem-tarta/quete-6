import { MailSlurp } from "mailslurp-client";

describe("Password reset", () => {
  
  it("reset password", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/password-reset");
    cy.get('[data-qa="accept-cta"]').click();
    cy.get("#email").type("decc1453-a360-4a4d-9466-763471296492@mailslurp.com");
    cy.get('[data-test="password-reset-submit-button"]').click();
    cy.mailslurp()
    .then(mailslurp => mailslurp.waitForLatestEmail('decc1453-a360-4a4d-9466-763471296492',40000, true))
    .then(email => //expect(email.subject).to.contain("Nouveau mot de passe"))
    cy.document().invoke('write', email.body));
    cy.get('.t_pt20px > a').click()
    cy.get('#newPassword').type('Houssem1234')
    cy.get('#newPasswordConfirmation').type('Houssem1234')
    cy.get('._1xMx-RYw').click()
    cy.get('#email').type('decc1453-a360-4a4d-9466-763471296492@mailslurp.com')
    cy.get('#submit-login').click()
    cy.get('#password').type('Houssem1234')
    cy.get('#submit-login').click()

  });
  
});
