export class OrderSummaryStepPage {
  private proceedToCheckoutSelector: string;

  constructor() {
    this.proceedToCheckoutSelector = '#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium';
  }

  public proceedToCheckoutClick() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
