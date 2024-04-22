<template>
    <div id="app" class="my-4">
  
      <nav-bar />
  
      <!-- This is where the content for each route will be rendered -->
      <!-- <router-view></router-view> -->
    </div>
  
    <div>hello world</div>
    <div id="styles">
      <h3 class="title">Component Styling</h3>
      <ul>
        <li>
          by default the style tag use global styling through out the tree, so for restricting them 
                we use scoped attribute for binding them ,
        </li>
        <li>
          -> if we dont appply scoped parent style will be applyied as from starting child to parent the last overwrite is parent's So
        </li>
        <li>
          -> in slots even though the content rendered in child component the style is applyid of parent's.
        </li>
      </ul>
    
    </div>
  
  
  </template>
  
  <script>
  import navBar from "./components/nav.vue";
  
  export default {
    name: 'styling',
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
  
  <style scoped>
    li{
      color: rgb(125, 121, 12);
      font-weight: bold;
    }
    ul{
      margin: 15px 20px;
      border: 1px solid grey;
      padding: 5px 7px;
      text-align: start;
    }
  </style>
  
  <style>
  .title {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin: 20px 0px;
  }
  </style>
  