export class PaymentStepPage {
  private iConfirmMyOrderSelector: string;
  private payByBankWireSelector: string;
  private readonly yourOrderIsCompleteSelector: string;

  constructor() {
    this.iConfirmMyOrderSelector = '#cart_navigation > button';
    this.payByBankWireSelector = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
    this.yourOrderIsCompleteSelector = '#center_column > div > p > strong';
  }

  public iConfirmMyOrderClick() {
    cy.get(this.iConfirmMyOrderSelector).click();
  }

  public payByBankWireClick() {
    cy.get(this.payByBankWireSelector).click();
  }

  public yourOrderIsCompleteObj() {
    return cy.get(this.yourOrderIsCompleteSelector);
  }
}
