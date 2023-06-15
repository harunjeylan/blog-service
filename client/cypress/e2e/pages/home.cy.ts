/// <reference types="cypress" />

describe("test home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('toggle theme',() => {
      const ButtonToggleTheme = cy.get('[data-test-id="ButtonToggleTheme-button-1"]');
      ButtonToggleTheme.click()
      ButtonToggleTheme.click()
  });
  it('open and close sizenav', () => {
    cy.viewport(550, 750)
    const OpenSizenavButton = cy.get('[data-test-id="open-sizenav-button"]');
    const CloseSizenavButton = cy.get('[data-test-id="close-sizenav-button"]');
    const sizenavCover = cy.get('[data-test-id="sizenav-cover"]');
    
    OpenSizenavButton.click()
    CloseSizenavButton.click()
    OpenSizenavButton.click()
    sizenavCover.click('topRight',{ force: true })
  });
});
