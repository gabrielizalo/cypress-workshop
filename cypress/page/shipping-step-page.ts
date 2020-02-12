export class ShippingStepPage {
  private iAgreeTheTermsSelector: string;
  private proceedToCheckoutSelector: string;

  constructor() {
    this.iAgreeTheTermsSelector = '#cgv';
    this.proceedToCheckoutSelector = '#form > p > button';
  }

  public proceedToCheckoutClick() {
    cy.get(this.proceedToCheckoutSelector).click();
  }

  public iAgreeTheTermsCheck() {
    cy.get(this.iAgreeTheTermsSelector).click();
  }
}
