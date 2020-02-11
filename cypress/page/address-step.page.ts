export class AddressStepPage {
  private proceedToCheckoutSelector: string;

  constructor() {
    this.proceedToCheckoutSelector = '#center_column > form > p > button';
  }

  public proceedToCheckoutClick() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
