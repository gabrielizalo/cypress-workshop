export class SignInStepPage {
  private readonly signInSelector: string;
  private readonly emailTextBoxSelector: string;
  private readonly passwordTextBoxSelector: string;

  constructor() {
    this.signInSelector = '#SubmitLogin';
    this.emailTextBoxSelector = '#email';
    this.passwordTextBoxSelector = '#passwd';
  }

  public signInClick() {
    cy.get(this.signInSelector).click();
  }

  public emailTextBoxFill(value: string) {
    cy.get(this.emailTextBoxSelector).type(value);
  }

  public passwordTextBoxFill(value: string) {
    cy.get(this.passwordTextBoxSelector).type(value);
  }
}
