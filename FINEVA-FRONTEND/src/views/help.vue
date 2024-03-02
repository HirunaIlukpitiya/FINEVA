<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {

};

</script>

<style>
  .icon-bar{
  position:fixed;
  top: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 2px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

</style>



<template>

    
    
  <div className="min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')] text-white-50">

    

    <br>

   <!-- Social media bar -->
   <div class="icon-bar">
      <a href="https://www.police.lk/" target="_blank">
        <button type="button" data-te-ripple-init data-te-ripple-color="light" v-b-tooltip.hover title="Web - Sri Lanka Police" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color: #7e8289">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
        </button>
      </a>

      <a href="https://www.facebook.com/SL-Police-Media-2095754130735409/" target="_blank">
        <button type="button" data-te-ripple-init data-te-ripple-color="light" v-b-tooltip.hover title="Facebook - Sri Lanka Police" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color: #1877f2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </button>
      </a>

      <a href="https://mobile.twitter.com/srilanka_police" target="_blank">
        <button type="button" data-te-ripple-init data-te-ripple-color="light" v-b-tooltip.hover title="Twitter - Sri Lanka Police" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color: #1da1f2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </button>
      </a>

      <a href="https://rainbowpages.lk/other/police-stations/" target="_blank">
        <button type="button" data-te-ripple-init data-te-ripple-color="light" v-b-tooltip.hover title="Police Stations - Contact" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color: #18f26f">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
        </button>
      </a>

      <a href="https://www.transport.gov.lk/web/index.php?option=com_content&view=article&id=26&Itemid=146&lang=en" target="_blank">
        <button type="button" data-te-ripple-init data-te-ripple-color="light" v-b-tooltip.hover title="Motor Traffic Department" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color: #f2183c">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
          </svg>
        </button>
      </a>
  
    </div>

    
   
      
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-6">
        <div class="card card-registration card-registration-2" style="">
                <div class="p-4">

              <h3 class="fw-normal mb-5" style="color: rgb(255, 255, 255) 255);" align="center"><b>Emergency Contacts of Police Stations</b></h3>

        <table class="table table-hover">
            <thead class="table-dark">
            <tr>
            <th>Police Station</th>
            <th>Contact Number</th>
            </tr>
        </thead>
<tbody>

    <!-- row 1 -->
<tr >
  <td scope="row" align="left">1. Snr.DIG - Administration</td>
  <td>011-2432272</td>
</tr>
    <!-- row 2 -->
<tr >
  <td scope="row" align="left">2. Snr.DIG - North Western Province</td>
  <td>037-2222356</td>
</tr>
    <!-- row 3 -->
<tr >
  <td scope="row" align="left">3. Snr.DIG - Western Province</td>
  <td>011-2441147</td>
</tr>
    <!-- row 4 -->
<tr >
  <td scope="row" align="left">4.Snr.DIG - Central Province</td>
  <td>081-2223940</td>
</tr>
    <!-- row 5 -->
<tr >
  <td scope="row" align="left">5.Snr.DIG - Sabaragamuwa Province</td>
  <td>045-2222787</td>
</tr>
    <!-- row 6 -->
<tr >
  <td scope="row" align="left">6.Snr.DIG - Support Service</td>
  <td>011-2441197</td>
</tr>
    <!-- row 7 -->
<tr >
  <td scope="row" align="left">7.Snr.DIG - Eastern Province</td>
  <td>065-2228806</td>
</tr>
    <!-- row 8 -->
<tr >
  <td scope="row" align="left">8.Snr.DIG - Medical Service, Welfare and Field Force Headquarters</td>
  <td>011-2331659</td>
</tr>
    <!-- row 9 -->
<tr >
  <td scope="row" align="left">9.Snr.DIG - North Central Province</td>
  <td>025-2224680</td>
</tr>
    <!-- row 10 -->
<tr >
  <td scope="row" align="left">10.Snr.DIG - Southern Province</td>
  <td>041-2220174</td>
</tr>
    <!-- row 11 -->
<tr >
  <td scope="row" align="left">11.Snr. DIG -Crimes & Traffic</td>
  <td>011-2878792</td>
</tr>
    <!-- row 12 -->
<tr >
  <td scope="row" align="left">12.Snr. DIG - Northern Province</td>
  <td>021-2059901</td>
</tr>
    <!-- row 13 -->
<tr >
  <td scope="row" align="left">13.Snr. DIG - Uva Province</td>
  <td>055-2223022</td>
</tr>
    <!-- row 14 -->
<tr >
  <td scope="row" align="left">14.DIG Special Task Force</td>
  <td>011-2588460</td>
</tr>
    <!-- row 15 -->
<tr >
  <td scope="row" align="left">15.DIG Crimes Range</td>
  <td>011-2694036</td>
</tr>
    <!-- row 16 -->
<tr >
  <td scope="row" align="left">16.DIG Matara & Hambantota Range</td>
  <td>047-2240231</td>
</tr>
    <!-- row 17 -->
<tr >
  <td scope="row" align="left">17.DIG Badulla Range (Acting)</td>
  <td>047-2240231</td>
</tr>
    <!-- row 18 -->
<tr >
  <td scope="row" align="left">18.DIG Community Police and Environment Protection Range</td>
  <td>011-2867098</td>
</tr>
    <!-- row 19 -->
<tr >
  <td scope="row" align="left">19.DIG Special Branch Range</td>
  <td>011-2501710</td>
</tr>
    <!-- row 20 -->
<tr >
  <td scope="row" align="left">20.DIG Transport & Communication Range</td>
  <td>011-2593019</td>
</tr>
    <!-- row 21 -->
<tr >
  <td scope="row" align="left"></td>
  <td></td>
</tr>


</tbody>
</table>
            </div>
        </div>
        <br>
    </div>
  </div>
</div>
  </div>
</template>
