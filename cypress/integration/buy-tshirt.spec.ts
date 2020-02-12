import { AddressStepPage, HomePage, MenuContentPage, PaymentStepPage, ProductAddedModalPage,
         ProductListPage, OrderSummaryStepPage, ShippingStepPage, SignInStepPage } from '../page';

describe('Given an user', () => {

  describe('When he visit our e-commerce', () => {
    before(() => {
      const homePage: HomePage = new HomePage();

      homePage.visit();
    });

    describe('And select a t-shirt', () => {
      before(() => {
        const menuContentPage: MenuContentPage = new MenuContentPage();

        menuContentPage.mainMenuItemTShirtClick();
      });

      describe('And add it to the cart to buy it', () => {
        before(() => {
          const productListPage: ProductListPage = new ProductListPage();

          productListPage.addToCartClick();
        });

        describe('And proceed to the buying', () => {
          before(() => {
            const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
            const orderSummaryPage: OrderSummaryStepPage = new OrderSummaryStepPage();

            productAddedModalPage.proceedToCheckoutButtonClick();
            orderSummaryPage.proceedToCheckoutButtonClick();
          });

          describe('And authenticate', () => {
            before(() => {
              const signInPage: SignInStepPage = new SignInStepPage();

              signInPage.emailTextBoxFill('aperdomobo@gmail.com');
              signInPage.passwordTextBoxFill('WorkshopProtractor');
              signInPage.signInClick();
            });

            describe('And finalize the buying process using bank wire payment', () => {
              before(() => {
                const addressStepPage: AddressStepPage = new AddressStepPage();
                const shippingPage: ShippingStepPage = new ShippingStepPage();
                const paymentStepPage: PaymentStepPage = new PaymentStepPage();

                addressStepPage.proceedToCheckoutButtonClick();
                shippingPage.iAgreeTheTermsCheck();
                shippingPage.proceedToCheckoutClick();
                paymentStepPage.payByBankWireClick();
              });

              it('then he should get the order finished', () => {
                const paymentStepPage: PaymentStepPage = new PaymentStepPage();

                paymentStepPage.iConfirmMyOrderClick();
                paymentStepPage.yourOrderIsCompleteObj()
                  .should('have.text', 'Your order on My Store is complete.');
              });
            });
          });

        });

      });

    });

  });

});
