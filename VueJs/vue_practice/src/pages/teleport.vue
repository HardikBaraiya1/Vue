<template>
    <div id="app" class="my-4">
  
      <nav-bar />
  
      <!-- This is where the content for each route will be rendered -->
      <!-- <router-view></router-view> -->
    </div>
  
    <div>hello world</div>
    <div id="teleport">
      <p>
        problem: whatever we write code fall under the app id tag which is main tag and first rendered from index and we mount that 
        from there.
  
        but some time we want to parallelly give tags on the root for that we can use teleport which will take the tag from here and place 
        it to provided area. like in this example parallel to root.
      </p>
      <h3 class="title">Under app</h3>
      <portalComponent where="inside"/>
      
      <h3 class="title">parallel to app under tag whose id is portal-root </h3>
      <teleport to="#portal-root">
        <portalComponent where="outside"/>
      </teleport>
    </div>
  
  </template>
  
  <script>
  import navBar from "./components/nav.vue";
  import portalComponent from "./components/portal.vue";
  
  export default {
    name: 'teleport',
    components: {
      // here we will register components as components
  
      navBar,   //when both name are same we can do like this instead of : , 
      portalComponent,
  
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
  