<template>
  <div id="app" class="my-4">
    
    <navBar />

    <!-- This is where the content for each route will be rendered -->
    <router-view></router-view>
  </div>
  <div>hello world</div>
  <!-- we can make custom events by using emit -->

  <!-- right now we change popup show using showPopup so can change from this file easily but 
        we can't do that from child comp. directly which we'll do here, so we pass here a notify then change from here
      
        so, for that we make custom event using emit from there and on triggering of that we'll handle that event here.-->
  <div id="emitCustomEvents" class="w-75 mx-auto">
    <button @click="showPopup = true; retrivedData = ''" class="btn btn-success">Show popup</button>
    <popup @close-me="showPopup = false" @closed-me-by="closePopUp" v-show="showPopup"/>    <!-- we can't directly take data so calling function this time. -->
    <p><b>RetrivedData is:</b> {{ retrivedData }}</p>
  </div>
 
</template>

<script>
import  navBar  from "./components/nav.vue";
import popup_emitUsage from "./components/popup.vue";


export default {
  name: 'App',
components: {
  // here we will register components as components

  navBar,   //when both name are same we can do like this instead of : , 
  popup : popup_emitUsage,

},
data(){
  return {
    showPopup : true,
    retrivedData : '',
  }
},
provide: {},
methods: {
  closePopUp(data){
    this.retrivedData = data;
    this.showPopup = false;
  }
},
watch: {},

}
</script>





<!-- 
  Reactivity Limitations: Vue's reactivity system works best when data is directly accessed within a component's data, computed, or ref properties. When using provide/inject, the injected value may not be reactive by default, especially if it's a primitive value (like a string or number) or a plain JavaScript object. Changes made to the provided value may not trigger re-renders in components that are consuming the injected value.

Prop Caching: Vue's reactivity system relies on getters and setters to track changes to data. When a value is passed as a prop from a parent component to a child component, Vue automatically creates getters and setters for the prop, enabling reactivity. However, when using provide/inject, Vue does not automatically create getters and setters for the injected value, which can lead to reactivity issues.
 -->