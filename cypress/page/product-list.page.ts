export class ProductListPage {
  private myProduct: any;
  private readonly addToCartButtonText: string;
  private readonly productListGrid: string;

  constructor() {
    this.addToCartButtonText = 'Add to cart';
    this.productListGrid = 'ul.product_list.grid';
  }

  public addToCartClick() {
    cy.get(this.productListGrid).contains(this.addToCartButtonText).click();
  }

  public findByProduct(productName: string) {
    return cy.get(this.productListGrid).contains(productName).parentsUntil('ajax_block_product');
  }

  public addToCartProduct(productName: string) {
    this.myProduct = this.findByProduct(productName);
    this.myProduct.contains(this.addToCartButtonText).click();
  }
}
