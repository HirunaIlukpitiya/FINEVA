<script>
import {
  Payhere,
  AccountCategory,
  Customer,
  CurrencyType,
  PayhereCheckout,
  CheckoutParams,
} from "@payhere-js-sdk/client";
Payhere.init("1223813", AccountCategory.SANDBOX);

const customerAttributes = {
        first_name: "Demo",
        last_name: "User",
        phone: "+94771234567",
        email: "user@example.com",
        address: "No. 50, Highlevel Road",
        city: "Panadura",
        country: "Sri Lanka",
};

export default {

methods:{
    async checkout() {
        try{
      const customer = new Customer(customerAttributes);

      const checkoutData = new CheckoutParams({
    returnUrl: 'http://localhost:3000/return',
    cancelUrl: 'http://localhost:3000/cancel',
    notifyUrl: 'http://localhost:8080/notify',
    order_id: '112233',
    itemTitle: 'Demo Item',
    currency: CurrencyType.LKR,
    amount: 100
  })
  const checkout = new PayhereCheckout(customer,checkoutData);
  checkout.start();
}catch(err){
    console.log(err);
}    
}
  }
}


</script>

<template>
  <button type="submit" id="payhere-payment" @click="checkout()">PayHere Pay</button>
</template>
