export class PaymentStepPage {
  private readonly iConfirmMyOrderSelector: string;
  private readonly payByBankWireSelector: string;
  private readonly payByBankWireText: string;
  private readonly yourOrderIsCompleteSelector: string;

  constructor() {
    this.iConfirmMyOrderSelector = '#cart_navigation > button';
    this.payByBankWireSelector = '.payment_module';
    this.payByBankWireText = 'Pay by bank wire';
    this.yourOrderIsCompleteSelector = '.cheque-indent > strong';
  }

  public iConfirmMyOrderClick() {
    cy.get(this.iConfirmMyOrderSelector).click();
  }

  public payByBankWireClick() {
    cy.get(this.payByBankWireSelector).contains(this.payByBankWireText).click();
  }

  public yourOrderIsCompleteObj() {
    return cy.get(this.yourOrderIsCompleteSelector);
  }
}
