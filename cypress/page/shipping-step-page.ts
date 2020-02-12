export class ShippingStepPage {
  private readonly iAgreeTheTermsSelector: string;
  private readonly proceedToCheckoutButtonSelector: string;
  private readonly proceedToCheckoutButtonText: string;

  constructor() {
    this.iAgreeTheTermsSelector = '#cgv';
    this.proceedToCheckoutButtonSelector = '#form';
    this.proceedToCheckoutButtonText = 'Proceed to checkout';
  }

  public proceedToCheckoutClick() {
    cy.get(this.proceedToCheckoutButtonSelector).contains(this.proceedToCheckoutButtonText).click();
  }

  public iAgreeTheTermsCheck() {
    cy.get(this.iAgreeTheTermsSelector).click();
  }
}
