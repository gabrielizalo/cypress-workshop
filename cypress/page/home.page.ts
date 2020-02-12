export class HomePage {
  private readonly homePageUrl: string;

  constructor() {
    this.homePageUrl = 'http://automationpractice.com/';
  }

  public visit() {
    cy.visit(this.homePageUrl);
  }
}
