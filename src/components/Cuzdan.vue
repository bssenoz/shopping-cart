<template>
  <div>
    <h1>Cüzdan</h1>

    <input
      type="number"
      min="0"
      v-model="paraekle"
      placeholder="Para ekle"
      style="margin-left: 40%; width: 15%;margin-top:5%;"
    /><br><br>
    <input
      type="submit"
      value="Ekle"
      @click="addMoney(money)"
      class="btn btn-success"
      style="cursor: pointer; width: 5%; height: 10%;margin-left:45%;"
    /><br><br>
    <strong style="margin-left:45%;">Para: {{ money }}₺</strong>
  </div>
</template>
<script>
export default {
  name: "cuzdan",
  data() {
    return {
      money: 200,
      paraekle: null,
    };
  },
  methods: {
    addMoney() {
      this.money += this.paraekle;
    },
  },
};
</script>
