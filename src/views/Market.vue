<template>
  <div class="market">
    <h1>Market</h1>
    <div class="productList">
      <row :gutter="12">
        <div v-for="product in arrays.productList" :key="product">
          <column :lg="4">
            <div class="border">
              <strong>{{ product.name }}</strong>
              <img :src="product.image" />
              <div>{{ product.cost }}₺ | Son {{ product.count }} Ürün</div>
              <br />
              <p v-if="product.count != 0">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  v-on:click="addToCart(product)"
                >
                  Sepete Ekle
                </button>
              </p>
              <p v-if="product.count == 0">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  disabled
                >
                  STOKTA YOK
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
export default {
  name: "Market",
  props: ["arrays"],
  methods: {
    addToCart(product) {
      this.arrays.cartItems.push(product);
      alert("Sepete Eklendi.");
    },
  },
};
</script>

<style>
.productList {
  float: right;
  margin-right: 15%;
  margin-top: 5%;
}
h1 {
  margin-top: 1%;
  margin-left: 1%;
}
</style>
