<script>
import { onMounted, ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "../store";
export default{
  data(){
    return{
      name:`${store.state.fine.firstName} ${store.state.fine.lastName}`,
      amount:store.state.fine.Amount,
      address:store.state.fine.address,
      contact:store.state.fine.contact,
      orderID:store.state.fine.orderID,
      email:store.state.fine.email,
      fines:store.state.fine.fineList,
    }
  },
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
        "order_id": store.state.fine.orderID,
        "items": "Door bell wireles",
        "amount": store.state.fine.Amount,
        "currency": "LKR",
        "hash": store.state.value, // *Replace with generated hash retrieved from backend
        "first_name": store.state.fine.firstName,
        "last_name": store.state.fine.lastName,
        "email": store.state.fine.email,
        "phone": store.state.fine.contact,
        "address": store.state.fine.address,
        "city": "",
        "country": "Sri Lanka",
        "delivery_address": store.state.fine.address,
        "delivery_city": "",
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
  <div
    className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-6">
          <div class="card card-registration card-registration-2" style="">
            <div class="p-4">
              <form action="" method="POST" autocomplete="off">
                <div class="row">
                  <div class="container">
                    <h3 class="fw-normal mb-5" style="color: rgb(4, 1, 37)">
                      Fine Pay
                    </h3>

                    <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <label >Customer Name</label>
                        <input
                          type="text"
                          name="nic"
                          id="nic"
                          v-model="name"
                          class="form-control"
                          placeholder="00.00"
                          aria-describedby="helpId"
                          disabled
                        />
                        <small id="helpId" class="text-muted"
                          >This is your due amount to pay.</small
                        >
                      </div>
                    </div>

                    <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <label>Fines</label>
                        <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th>Fine Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fine in fines" :key="fine._id">
            <td scope="row">{{ fine.name }}</td>
            <td>{{ "Rs: " + fine.amount }}</td>
          </tr>
        </tbody>
      </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label>Fine ID</label>
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        class="form-control"
                        placeholder="CVV"
                        disabled
                        v-model="orderID"
                        aria-describedby="helpId"
                      />
                      <small id="helpId" class="text-muted"></small>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <label>Fine Amount</label>
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        class="form-control"
                        placeholder="**/**"
                        aria-describedby="helpId"
                        disabled
                        v-model="amount"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <button
            type="submit"
            id="payhere-payment"
            class="btn btn-success"
          >
            Continue to Payment
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
