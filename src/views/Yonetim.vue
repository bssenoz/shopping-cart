<template>
  <div class="yonetim">
    <h1>Yönetim</h1>
    <br /><br />
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link
          to="/Yonetim/Stok"
          a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >Stok</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/Yonetim/Cuzdan"
          a
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          >Cüzdan</router-link
        >
      </li>
    </ul>
    <router-view :arrays="arrays"></router-view>
  </div>
</template>

<script>
export default {
  name: "Yonetim",
  props: ["arrays"],
};
</script>

 <style>
h1 {
  margin-top: 1%;
  margin-left: 1%;
}
.stok {
  margin-left: 15%;
}
</style>
