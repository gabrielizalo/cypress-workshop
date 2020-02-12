export class MenuContentPage {
  private readonly mainMenuItemsSelector: string;
  private readonly mainMenuItemTShirtsText: string;

  constructor() {
    this.mainMenuItemsSelector = '.sf-menu > li > a';
    this.mainMenuItemTShirtsText = 'T-shirts';
  }

  public mainMenuItemTShirtClick() {
    cy.get(this.mainMenuItemsSelector).contains(this.mainMenuItemTShirtsText).click();
  }
}
