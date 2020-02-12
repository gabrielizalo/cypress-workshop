export class SignInStepPage {
  private signInSelector: string;
  private emailTextBoxSelector: string;
  private passwordTextBoxSelector: string;

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
