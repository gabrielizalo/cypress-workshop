import { AddressStepPage, HomePage, MenuContentPage, PaymentStepPage, ProductAddedModalPage,
         ProductListPage, OrderSummaryStepPage, ShippingStepPage, SignInStepPage } from '../page';

describe('Buy a t-shirt', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const homePage: HomePage = new HomePage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderSummaryPage: OrderSummaryStepPage = new OrderSummaryStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingPage: ShippingStepPage = new ShippingStepPage();
  const signInPage: SignInStepPage = new SignInStepPage();

  it('Then should be bought a t-shirt', () => {
    // HomePage
    homePage.visit();

    // Navigation in the products
    menuContentPage.mainMenuItemTShirtClick();
    productListPage.addToCartClick();
    productAddedModalPage.proceedToCheckoutButtonClick();

    // Begin buying
    orderSummaryPage.proceedToCheckoutButtonClick();

    // Sign in
    signInPage.emailTextBoxFill('aperdomobo@gmail.com');
    signInPage.passwordTextBoxFill('WorkshopProtractor');
    signInPage.signInClick();

    // Continue process
    addressStepPage.proceedToCheckoutButtonClick();

    // Shipping address
    shippingPage.iAgreeTheTermsCheck();
    shippingPage.proceedToCheckoutClick();

    // Payment
    paymentStepPage.payByBankWireClick();
    paymentStepPage.iConfirmMyOrderClick();
    paymentStepPage.yourOrderIsCompleteObj()
      .should('have.text', 'Your order on My Store is complete.');
  });
});
