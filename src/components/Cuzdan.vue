<template>
  <div>
    <h1>Cüzdan</h1>
    <input
      type="number"
      min="0"
      v-model="paraEkle"
      id="paraEkle"
      placeholder="Para ekle"
      style="margin-left: 40%; width: 200px; margin-top: 5%"
    /><br /><br />
    <button
      class="btn btn-success"
      @click="addMoney(money)"
      style="cursor: pointer; margin-left: 40%"
    >
      Ekle
    </button>
    <br /><br />
    <strong style="margin-left: 40%">Para: {{ arrays.money.wallet }}₺</strong>
  </div>
</template>
<script>
export default {
  name: "Cuzdan",
  props: {
    arrays: {
      productList: [
        {
          cost: Number,
        },
      ],
      cartItems: Array,
      money: Array,
    },
  },

  data() {
    return {
      paraEkle: null,
    };
  },
  methods: {
    addMoney() {
      var paraEkle = Number(document.getElementById("paraEkle").value);
      this.arrays.money.wallet += paraEkle;
    },
  },
};
</script>
