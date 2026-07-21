import {Page} from '@playwright/test'

export class locators {

    async getProductName(page:Page, item: string){
            return page.getByTestId(/product-name-prod/i).and(page.getByRole('link',{name: item }))
    }

    async getProductAddtoCart(page:Page, productid: string){

            return page.getByTestId('add-to-cart-prod-'+productid).and(page.getByRole('button',{name:/add to cart/i}))
    }

    async getAddtoCartButton(page:Page){

            return page.getByTestId(/add-to-cart-prod-/i)
    }

    async getSearchInputBox(page:Page){

           return page.getByTestId('search-input')
    }

     async getSearchButton(page:Page){

     
        return page.getByTestId('search-button')
     }

     async cartProceed(page:Page){
        return page.getByTestId('checkout-button')
     }

     async checkoutName(page:Page){
        return  page.getByTestId('guest-name-input')
       
     }

     async checkoutEmail(page:Page){
        return page.getByTestId('guest-email-input')
     }

     async checkoutPhno(page:Page){
        return page.getByTestId('guest-phone-input')
     }

     async checkoutStreet(page:Page){
        return   page.getByTestId('shipping-street-input')
     }

     async checkoutCity(page:Page){
        return  page.getByTestId('shipping-city-input')
     }

     async checkoutState(page:Page){
        return  page.getByTestId('shipping-state-select')
     }

     async checkoutZip(page:Page){
        return  page.getByTestId('shipping-zip-input')
     }

     async proceedToPaymentButton(page:Page){
        return  page.getByTestId('continue-to-payment-button')
     }

     async cardName(page:Page){
        return  page.getByTestId('payment-card-name')
     }
     async cardNumber(page:Page){
        return  page.getByTestId('payment-card-number')
     }

     async cardExpiry(page:Page){
        return  page.getByTestId('payment-expiry')
     }

     async cardCvv(page:Page){
        return  page.getByTestId('payment-cvv')
     }

     async placeOrderButton(page:Page){
        return  page.getByTestId('place-order-button')
     }
 
     async checkoutFailureToggle(page :Page){
        return page.getByTestId('payment-scenario-failure')
     }

     async paymentGeneralError(page :Page){
        return page.getByTestId('payment-general-error');
     }
   
     async cartRemoveItemButton(page:Page,id:string){
        return page.getByTestId('cart-remove-prod-'+id)
     }
}