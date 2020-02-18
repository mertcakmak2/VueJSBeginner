<template>
  <div id="app">
      <nav>
        <router-link to="/">Dersler</router-link>
        <router-link to="/hocalar">Hocalar</router-link>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>

import Dersler from './components/Dersler.vue';

export default {
  name: 'app',
  components:{
    Dersler
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

body{
  background-color: #cf6a87;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body,html{
  margin: 0;
  height: 100%;
}
#app{
  width: 50%;
}
nav{
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #f5cd79;
  border-radius: 4px;
  color:rgb(0,110,255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
