<script>
// import {
//   Payhere,
//   AccountCategory,
//   Customer,
//   CurrencyType,
//   PayhereCheckout,
//   CheckoutParams,
// } from "@payhere-js-sdk/client";
// Payhere.init("1223824", AccountCategory.SANDBOX);

// const customerAttributes = {
//   first_name: "Kavishka",
//   last_name: "Nilan",
//   phone: "+94775128493",

//   email: "kavishkanilan56@gmail.com",
//   address: "No. 50, Highlevel Road",
//   city: "Panadura",
//   country: "Sri Lanka",
// };

// export default {
//   methods: {
//     async checkout() {
//       try {
//         const customer = new Customer(customerAttributes);
//         const checkoutData = new CheckoutParams({
//           returnUrl: "http://localhost:5173/payment",
//           cancelUrl: "http://localhost:5173/payment",
//           notifyUrl: "http://localhost:5173/payment",
//           order_id: "112233",
//           itemTitle: "Demo Item",
//           currency: CurrencyType.LKR,
//           amount: 100,
//           // hash: 'CF596A3A5F0DB2A69E889A81BE04D7BB'
//         });
//         const checkout = new PayhereCheckout(customer, checkoutData);
//         checkout.start();
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   },
// };

import {onMounted, ref} from "vue";

export default{
  setup(){
    const src="https://www.payhere.lk/lib/payhere.js";

    onMounted(()=>{
      new Promise ((resolve,reject)=>{
       let script=document.querySelector(`script[src="${src}"]`);

       if(!script){
        script=document.createElement("script");
        script.src=src;
        script.async=true;
        script.setAttribute("Data-Status", "Loading");
        document.head.append(script);

       

       script.addEventListener("load",()=>{
        resolve();
        script.setAttribute("Data-Status", "Loaded");
       
      });
      
      script.addEventListener("error", (error) => {
            reject(error);
            script.setAttribute("data-status", "error"); 
          });
        } else {
          resolve(); 
        }
      }).then(() => {

    // Show the payhere.js popup, when "PayHere Pay" is clicked
    document.getElementById('payhere-payment').onclick = function () {
    const payment = {
        "sandbox": true,
        "merchant_id": "1223824",    // Replace your Merchant ID
        "return_url": "http://localhost:5173/payment",     // Important
        "cancel_url": "http://localhost:5173/payment",     // Important
        "notify_url": "http://localhost:5173/payment",
        "order_id": "12345",
        "items": "Door bell wireles",
        "amount": "1000.00",
        "currency": "LKR",
        "hash": "B00CE8EB5D734FC1B96EFE6B13005BEF", // *Replace with generated hash retrieved from backend
        "first_name": "Saman",
        "last_name": "Perera",
        "email": "samanp@gmail.com",
        "phone": "0771234567",
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",  
  };
  payhere.startPayment(payment);
  };
});
});

  },
};
</script>

<template>

</template>
