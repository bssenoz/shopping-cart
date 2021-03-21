<template>
  <div>

    <div class="wallet">
      <h3 style="float: right; margin-right: 10%">Cüzdan<img src="https://us.123rf.com/450wm/rrraven/rrraven1411/rrraven141100011/33352929-vector-black-illustration-of-money-icon-on-white.jpg?ver=6"
          style="width: 30%; height: 30%"/>
      </h3>

      <p>Toplam Para: {{ money }}₺</p>
    </div>

    <h1>Sepetim</h1>
<br>
     <div class="products2">
      <div v-for="(product, index) in diziler.cartItems" :key="index">
        
      <div class="border">
 
        <h3>{{product.name}}</h3>
        <div>{{ product.cost }}₺ </div>
        <button type="button" class="btn btn-outline-dark" v-on:click="removeItemFromCart(product)">Sepetten Kaldır</button>
      </div>
      </div>
     </div>
<br>
 <p v-if="diziler.cartItems.length!=0" style="margin-left:15%;">
     <strong> Toplam Tutar: {{odenecekTutar}}  </strong><br><br>
  <button type="button" class="btn btn-outline-danger" v-on:click="getAlert" @click="buy" style="cursor: pointer;">Satın Al</button></p>
  
 <p v-if="diziler.cartItems.length==0" style ="color:red; margin-left:40%; font-size:20px;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MAqp-zAgfFGwQxX93tXKl7-DEqX2BccX3Q&usqp=CAU" style="width:4%; height:4%; margin-left:10%; margin-top:10%;"><br><br>
   Sepet boş. Hadi alışveriş yapın!</p>
 <router-view :diziler="diziler"></router-view>
</div>
    
</template>

<script>


export default {
  name: "sepet",
  props: {
    diziler: {
      productList:[
        {
          cost:Number
        }
       
      ], 
      cartItems: Array
    },
   
  },

  data: () => {
    return {
      money: 200,
      odenecekTutar:0,
    };
  },
  methods: {
     removeItemFromCart(product) {
      this.diziler.cartItems.splice(this.diziler.cartItems.indexOf(product),1);
      console.log(this.diziler.cartItems);
      product.count++;
    },
    getAlert: function (total) {
      alert("Satın alma işlemi başarı ile tamamlandı.");
      this.money -= parseInt(total.target.value);
    },
    buy(){
      this.money -= this.odenecekTutar 
    }
  },
  created() {
   for(let index=0 ; index<this.diziler.cartItems.length; index++) {
    const element=this.diziler.cartItems[index];
    this.odenecekTutar+=element.cost;
    }
     // this.diziler.cartItems.forEach(element=>{
       // this.odenecekTutar+=element.cost})
  }
};
</script>

<style >
h1{
  margin-top:1%;
  margin-left:1%;
}
.border{
    padding:5px 10px;
    width:300px;
     height: 13%;
}
.wallet{
  float:right;
  width:300px;
  padding:10px 12px 12px 12px;
  margin-top:10%;
  margin-right: 2%;
  border:2px dashed #666;
  
}
.wallet:hover{
    border:2px solid #666;
    transition: all 1s;
}
.products2{
  margin-left:5%;
}



</style>