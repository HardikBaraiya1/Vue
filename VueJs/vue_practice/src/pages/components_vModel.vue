<template>
    <div id="app" class="my-4">
      
      <navBar />
  
      <!-- This is where the content for each route will be rendered -->
      <router-view></router-view>
    </div>
    <div>hello world</div>
    <div id="componentsAndvModel">
      <div id="inputs" class="d-flex-collumn align-items-end">
      Pre-Defined input: <input type="text" v-model="inputedText"> <br>
    Our inputComponent: <Input v-model="inputedText"/> <br>  
  
    </div>
    <p>{{ inputedText }}</p>
    </div>
  </template>
  
  <script>
  import  navBar  from "./components/nav.vue";
  import formElementInput from "./components/formComponents.vue";
  
  export default {
    name: 'components_vModel',
  components: {
    // here we will register components as components
  
    navBar,   //when both name are same we can do like this instead of : , 
    Input: formElementInput,
  
  },
  data(){
    return {
      inputedText: '',
    }
  },
  provide: {},
  methods: {},
  watch: {
    formElementInput(newval){
      console.log(newval);
    }
  },
  
  }
  </script>
  
  
  
  
  
  <!-- 
    Reactivity Limitations: Vue's reactivity system works best when data is directly accessed within a component's data, computed, or ref properties. When using provide/inject, the injected value may not be reactive by default, especially if it's a primitive value (like a string or number) or a plain JavaScript object. Changes made to the provided value may not trigger re-renders in components that are consuming the injected value.
  
  Prop Caching: Vue's reactivity system relies on getters and setters to track changes to data. When a value is passed as a prop from a parent component to a child component, Vue automatically creates getters and setters for the prop, enabling reactivity. However, when using provide/inject, Vue does not automatically create getters and setters for the injected value, which can lead to reactivity issues.
   -->