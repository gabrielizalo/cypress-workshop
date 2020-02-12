export class ProductListPage {
  private addToCartSelector: string;

  constructor() {
    this.addToCartSelector = '#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default';
  }

  public addToCartClick() {
    cy.get(this.addToCartSelector).click();
  }
}
