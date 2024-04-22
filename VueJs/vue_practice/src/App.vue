<template>
  <div id="app" class="my-4">

    <nav-bar />

    <!-- This is where the content for each route will be rendered -->
    <!-- <router-view></router-view> -->
  </div>

  <div>hello world</div>
  

</template>

<script>
import navBar from "./components/nav.vue";

export default {
  name: 'App',
  components: {
    // here we will register components as components

    navBar,   //when both name are same we can do like this instead of : , 

  },
  data() {
    return {

    }
  },
  provide: {},
  methods: {},
  watch: {},

}
</script>

<style>
.title {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin: 20px 0px;
}
</style>
