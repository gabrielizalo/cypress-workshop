export class ProductAddedModalPage {
  private readonly proceedToCheckoutButtonSelector: string;
  private readonly proceedToCheckoutButtonText: string;

  constructor() {
    this.proceedToCheckoutButtonSelector = '.layer_cart_cart';
    this.proceedToCheckoutButtonText = 'Proceed to checkout';
  }

  public proceedToCheckoutButtonClick() {
    cy.get(this.proceedToCheckoutButtonSelector).contains(this.proceedToCheckoutButtonText).click();
  }
}
