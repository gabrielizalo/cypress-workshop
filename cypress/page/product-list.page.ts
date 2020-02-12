export class ProductListPage {
  private readonly addToCartButtonText: string;
  private readonly productListGrid: string;

  constructor() {
    this.addToCartButtonText = 'Add to cart';
    this.productListGrid = 'ul.product_list';
  }

  public addToCartClick() {
    cy.get(this.productListGrid).contains(this.addToCartButtonText).click();
  }
}
