import { MailSlurp } from "mailslurp-client";

describe("Password reset", () => {
  /*it('register', ()=>{
        cy.visit('https://preprod.backmarket.fr/fr-fr')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('[data-test="icon-avatar"]').click()
        cy.get('#email').type('decc1453-a360-4a4d-9466-763471296492@mailslurp.com')
        cy.get('#submit-login').click()
        cy.get('#password').type('Azerty123')
        cy.get('#first-name').type('houssem')
        cy.get('#last-name').type('houssem')
        cy.get('.cursor-pointer > .flex').click()
        cy.get('#submit-signup').click()
    })*/
  it("reset password", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr");
    cy.get('[data-qa="accept-cta"]').click();
    cy.get('[data-test="icon-avatar"]').click();
    cy.get("#email").type("decc1453-a360-4a4d-9466-763471296492@mailslurp.com");
    cy.get("#submit-login").click();
    cy.get(".mb-7").click();
    cy.get('[data-test="password-reset-submit-button"]').click();
  });
  it.only("email API", () => {
    cy.request({
      method: "GET",
      url: "https://api.mailslurp.com/emails/latest",
      headers: {
        accept: "application/json",
        "x-api-key":"01d00688cad64bee02e8182242ce8ec2022341a36b2fc5199fde8d7b42145fb2",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.attachements[3].subject).to.eql('Nouveau mot de passe')
    });
  });
});
