<template>
  <div>
    <h1>Stok</h1>
    <br /><br />
    <input
      type="number"
      min="0"
      v-model="sellCount"
      placeholder="Ürün miktarı"
      style="margin-left: 16%; width: 16%"
    /><br /><br /><br />

    <div class="stok">
      <row :gutter="12">
        <div v-for="product in diziler.productList" :key="product.name">
          <column :lg="4">
            <div class="border">
              <strong>{{ product.name }}</strong>
              <div>{{ product.count }} Ürün</div>
              <br />
              <input
                type="submit"
                value="Stoktan Kaldır"
                v-on:click="removeFromProduct(product)"
                class="btn btn-warning"
                @click="getAlert2"
                style="cursor: pointer; width: 45%; height: 10%"
              /><br /><br />
              <p v-if="product.count != 0">
                <input
                  type="submit"
                  value="Stoktan Eksilt"
                  @click="sellProduct(product)"
                  class="btn btn-light"
                  style="cursor: pointer; width: 45%; height: 10%"
                />
              </p>
              <p v-if="product.count == 0">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  disabled
                >
                  Stoktan Eksilt
                </button>
              </p>
              <input
                type="submit"
                value="Stoğa Ekle"
                @click="addProduct(product)"
                class="btn btn-light"
                style="cursor: pointer; width: 45%; height: 10%"
              />
            </div>
          </column>
        </div>
      </row>
    </div>

    <p v-if="sellWarning" style="color: red; font-weight: bold">
      Girdiğiniz miktar stok adetlerinden fazla!
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "stok",
  props: ["diziler"],
  methods: {
    removeFromProduct(product) {
      this.diziler.productList.splice(
        this.diziler.productList.indexOf(product),
        1
      );
      console.log(this.diziler.productList);
    },
    sellProduct(product) {
      if (this.sellCount > product.count) {
        this.sellWarning = true;
      } else {
        product.count = product.count - this.sellCount;
        this.sellWarning = false;
      }
    },
    addProduct(product) {
      product.count = product.count += this.sellCount;
    },
    getAlert2: function () {
      alert("Ürün stoktan kaldırıldı.");
    },
  },
};
</script>
 <style>
h1 {
  margin-top: 1%;
  margin-left: 1%;
}
.border {
  margin-left: 10%;
}
</style>