<template>
    <div id="app" class="my-4">
  
      <nav-bar />
  
      <!-- This is where the content for each route will be rendered -->
      <!-- <router-view></router-view> -->
    </div>
  
    <div>hello world</div>
    <div id="slots">
      <!-- slots are more benificial over props 
      problem: with props we have strict restriction in parent-child component
              with child we can create html & using parent we only can pass data. -->
      <!-- so using slot we can resolve this and can reuse more efficiently. in this we use slot tag whatever we want to use
          and in resuing we import and between that component(don't use self closing now) whatever we do it will replace the slot tag there and we have outer area using -->
      <h3 class="title">Slots</h3>
      <card></card>
      <card>This is added content but html and styling i'm reusing.</card>
      <card>
        <h1>Written in h1 tag</h1>
      </card>
      <card>
        <img src="https://picsum.photos/200" alt="loading...">
      </card>
      <h3 class="title">named slot practice</h3>
      <!-- named slots usage  -->
      <card>
        <template v-slot:header>
          <h3>Heading- this is header area</h3>
        </template>
  
        <template v-slot:default>
          <img src="https://picsum.photos/210" alt="loading...">
        </template>
  
        <template v-slot:footer> <!-- use : instead of ="" else end up getting error duplicate slot name found-->
          <h4>footer-Copyright not reserved!!</h4>
        </template>
      </card>
      <h3 class="title">SlotProps</h3>
      
      <card>
        <template v-slot:userNames="slotProps">
          {{ slotProps.firstname }} {{ slotProps.lastname }}
        </template>
      </card>
  
      <card>
        <template v-slot:userNames="slotProps">
          {{ slotProps.firstname }}
        </template>
      </card>
  
      <card>
        <template v-slot:userNames="slotProps">
          {{ slotProps.firstname }}, {{ slotProps.lastname }}
        </template>
      </card>
    </div>
  
  </template>
  
  <script>
  import navBar from "./components/nav.vue";
  import card_slot1 from "./components/slot.vue";
  
  export default {
    name: 'slotsPractice',
    components: {
      // here we will register components as components
  
      navBar,   //when both name are same we can do like this instead of : , 
      card: card_slot1,
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
  }
  </style>
  