<template>
  <div>
    <div class="wallet">
      <h3 style="float: right; margin-right: 10%">
        Cüzdan<img
          src="https://us.123rf.com/450wm/rrraven/rrraven1411/rrraven141100011/33352929-vector-black-illustration-of-money-icon-on-white.jpg?ver=6"
          style="width: 30%; height: 30%"
        />
      </h3>
      <p>Toplam Para: {{ arrays.money.wallet }}₺</p>
    </div>
    <h1>Sepetim</h1>
    <br />
    <div class="products">
      <div v-for="(product, index) in arrays.cartItems" :key="index">
        <div class="border">
          <h3>{{ product.name }}</h3>
          <div>{{ product.cost }}₺</div>
          <button
            type="button"
            class="btn btn-outline-dark"
            v-on:click="removeItemFromCart(product)"
          >
            Sepetten Kaldır
          </button>
        </div>
      </div>
    </div>
    <br />
    <p v-if="arrays.cartItems.length != 0" style="margin-left: 15%">
      <strong> Toplam Tutar: {{ arrays.money.total }} </strong><br /><br />
      <button
        type="button"
        class="btn btn-outline-danger"
        @click="buy"
        style="cursor: pointer"
      >
        Satın Al
      </button>
    </p>

    <h5
      v-if="arrays.cartItems.length == 0"
      style="color: red; margin-left: 40%; font-size: 20px"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MAqp-zAgfFGwQxX93tXKl7-DEqX2BccX3Q&usqp=CAU"
        style="width: 5%; height: 4%; margin-left: 10%; margin-top: 10%"
      /><br /><br />
      Sepet boş. Hadi alışveriş yapın!
    </h5>
    <router-view :arrays="arrays"></router-view>
  </div>
</template>

<script>
export default {
  name: "Sepet",
  props: {
    arrays: {
      productList: [
        {
          cost: Number,
        },
      ],
      cartItems: Array,
      money: Number,
    },
  },
  methods: {
    removeItemFromCart(product) {
      this.arrays.cartItems.splice(this.arrays.cartItems.indexOf(product), 1);
      this.arrays.money.total -= product.cost;
    },
    buy() {
      this.arrays.money.wallet -= this.arrays.money.total;
      if (this.arrays.money.wallet < 0) {
        alert("Satın alma işlemi için cüzdanınızda yeterli para yok!");
        this.arrays.money.wallet += this.arrays.money.total;
      } else {
        alert("Satın alma işlemi başarı ile tamamlandı.");
        for (var i = 0; i < this.arrays.cartItems.length; i++) {
          this.arrays.cartItems[i].count--;
        }
        this.arrays.cartItems.splice(0, this.arrays.cartItems.length);
      }
    },
  },
  created() {
    this.arrays.money.total = 0;
    for (let index = 0; index < this.arrays.cartItems.length; index++) {
      const element = this.arrays.cartItems[index];
      this.arrays.money.total += element.cost;
    }
  },
};
</script>

<style >
h1 {
  margin-top: 1%;
  margin-left: 1%;
}
.border {
  padding: 5px 10px;
  width: 300px;
  height: 13%;
}
.wallet {
  float: right;
  width: 300px;
  padding: 10px 12px 12px 12px;
  margin-top: 10%;
  margin-right: 2%;
  border: 2px dashed #666;
}
.wallet:hover {
  border: 2px solid #666;
  transition: all 1s;
}
.products {
  margin-left: 5%;
}
</style>