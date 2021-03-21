<template>
  <div class="market">
    <h1>Market</h1>
    <div class="products">
      <row :gutter="12">
        <div v-for="product in diziler.productList" :key="product">
          <column :lg="4">
            <div class="border">
              <strong>{{ product.name }}</strong>
              <img :src="product.image" />
              <div>{{ product.cost }}₺  | Son {{ product.count }} Ürün</div>
              <br>
              <p v-if="product.count != 0">
                <button type="button"
                  class="btn btn-outline-primary" v-on:click="addToCart(product), product.count--" v-if="product.count > 0" @click="getAlert">Sepete Ekle
                </button>
              </p>
              <p v-if="product.count == 0">
                <button type="button" 
                  class="btn btn-outline-secondary" disabled > STOKTA YOK
                </button>
              </p>
           
            </div>
          </column>
        </div>
      </row>
    </div>
  </div>
</template>

<script>
import App from "../App";

export default {
  name: "market",
  data: () => {
    return {
      odenecekTutar:0,
    };
  },
  props: ["diziler"],
  methods: {
   addToCart(product) {
      this.diziler.cartItems.push(product);
      console.log(App.data().cartItems);
    },
    getAlert: function () {
      alert("Sepete Eklendi.");
    },
  },

};
</script>

<style>
.products {
  float: right;
  margin-right: 15%;
  margin-top: 5%;
}
h1{
  margin-top:1%;
  margin-left:1%;
}
</style>
