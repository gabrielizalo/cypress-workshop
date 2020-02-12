export class ProductAddedModalPage {
  private proceedToCheckoutSelector: string;

  constructor() {
    this.proceedToCheckoutSelector = '#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a';
  }

  public proceedToCheckoutClick() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
