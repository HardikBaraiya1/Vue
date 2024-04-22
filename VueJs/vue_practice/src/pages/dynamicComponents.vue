<template>
    <div id="app" class="my-4">
  
      <nav-bar />
  
      <!-- This is where the content for each route will be rendered -->
      <!-- <router-view></router-view> -->
    </div>
  
    <div>hello world</div>
    <div id="dynamicComponents">
      <button @click="activeStream = 'scienceStream'">science</button>
      <button @click="activeStream = 'commerceStream'">commerce</button>
      <button @click="activeStream = 'artsStream'">Arts</button>
      <br>
  
      <!-- <scienceStream />         will show all the stream always
      <commerceStream />
      <artsStream /> -->
  
      <!-- <scienceStream v-if="activeStream === 'scienceStream'" />        it will be hectic as we can also have more than 15 in ease case
      <commerceStream v-if="activeStream === 'commerceStream'" />
      <artsStream v-if="activeStream === 'artsStream'" /> -->
  
      <!-- so we use vue provided component tag which proivde dynamic component rendring useing is keyword -->
      <!-- <component :is="activeStream"></component> -->
      <!-- this will create new instance each time and cause of that your inputed data will not saved for saving them
         and not vue create new instance every time we bind this around keep-alive -->
  
      <keep-alive>
      <component :is="activeStream"></component>
      </keep-alive>
    </div>
  
  </template>
  
  <script>
  import navBar from "./components/nav.vue";
  import  scienceStream  from "./components/science.vue";
  import  commerceStream  from "./components/commerce.vue";
  import  artsStream  from "./components/arts.vue";
  
  export default {
    name: 'dynamicComponents',
    components: {
      // here we will register components as components
  
      navBar,   //when both name are same we can do like this instead of : , 
      scienceStream,
      commerceStream,
      artsStream,
    },
    data() {
      return {
        activeStream : 'scienceStream',
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
  