export class OrderSummaryStepPage {
  private readonly proceedToCheckoutButtonSelector: string;
  private readonly proceedToCheckoutButtonText: string;

  constructor() {
    this.proceedToCheckoutButtonSelector = '.cart_navigation';
    this.proceedToCheckoutButtonText = 'Proceed to checkout';
  }

  public proceedToCheckoutButtonClick() {
    cy.get(this.proceedToCheckoutButtonSelector).contains(this.proceedToCheckoutButtonText).click();
  }
}
