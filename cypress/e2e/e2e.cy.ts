/// <reference types="Cypress"/>

describe("e2e test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1440, 900);
  });

  it("paginated in aplication", () => {
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.get("button[id='previous']").click();
    cy.wait(1000);
    cy.get("button[id='previous']").click();
    cy.wait(1000);
    cy.get("button[id='previous']").click();
  });

  it("open card product in page one", () => {
    cy.visit("/product/-1341c358-6032-5e09-971b-222a096496c1");
    cy.wait(1000);
    cy.get("a").click();
  });

  it("open card product in page two", () => {
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.visit("/product/-cb88855c-8325-5a05-8de8-bb629b83c8c6");
    cy.wait(1000);
    cy.get("a").click();
  });

  it("open card product in page tree", () => {
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.get("button[id='next']").click();
    cy.wait(1000);
    cy.visit("/product/-72353ed9-ef26-5c9e-b1aa-e7c83158b664");
    cy.wait(1000);
    cy.get("a").click();
  });

  it("search product barra", () => {
    cy.get("input").type("barra");
    cy.wait(1000);
  });

  it("search product aerosol", () => {
    cy.get("input").type("aerosol");
    cy.wait(1000);
  });

  it("search product gel", () => {
    cy.get("input").type("gel");
    cy.wait(1000);
  });

  it("search product talco", () => {
    cy.get("input").type("talco");
    cy.wait(1000);
    cy.get(":nth-child(2) > .card-container").click();
    cy.wait(1000);
    cy.get("a").click();
  });
});
