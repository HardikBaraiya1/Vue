<template>
  <div id="app" class="my-4">
    
    <navBar />

    <!-- This is where the content for each route will be rendered -->
    <router-view></router-view>
  </div>
<!-- however provide has some limitation 1.Reactivity limitation 2.Prop caching. for detail ref below-->
  <div>hello world</div>
  <div id="provideInject">
    <!-- it(change) will not work , can resolve using state management and may be with using computed property-->
    Username: <input type="text" v-model="username" style="background-color: azure;" placeholder="Enter your username">
    <!-- The provide/inject pattern is primarily designed for one-way data flow, 
      where data is provided by a parent component and injected into descendant components for consumption. 
      However, this pattern does not automatically enable reactivity between the provider and the consumer. This means that changes made to the provided value in the provider component may not be immediately reflected in the injected value in the consumer component. -->


    <component_A />
    <!-- Problem: if we want to pass data from parent to inner child like   App->ComponentC which is not directly 
          after App it is in level inside here it is 3rd level inside, we have two componrnt A and B BWT them so
        if we want to pass to C we have to pass throw them, but though A&B not need data they has them
      
          so for resolving this problem vue provides provideInject so we can directly pass from has to need 
          so where we have data we use provide and load then wherever under that in any child we need them 
          we simply use Inject and grab that data  -->
  </div>
 
</template>

<script>
import  navBar  from "./components/nav.vue";
import component_A from "./components/componentA.vue"


export default {
  name: 'provideInject',
components: {
  // here we will register components as components

  navBar,   //when both name are same we can do like this instead of : , 
  component_A,     //first level component
 
},
data(){
  return {
    username: 'Hardik Baraiya'
  }
},
// provide: {
//   // username: 'Hardik Baraiya'      // if we directly use this then we can not use that in App means we can not use provide data direcly in this as it build mainly for passing so
//   // username: this.username         // we can not diectly do that as it will gives error so we'll use func. which return this
// },
provide(){
  return {
    username: this.username
  }
},
methods: {},
watch: {},

}
</script>





<!-- 
  Reactivity Limitations: Vue's reactivity system works best when data is directly accessed within a component's data, computed, or ref properties. When using provide/inject, the injected value may not be reactive by default, especially if it's a primitive value (like a string or number) or a plain JavaScript object. Changes made to the provided value may not trigger re-renders in components that are consuming the injected value.

Prop Caching: Vue's reactivity system relies on getters and setters to track changes to data. When a value is passed as a prop from a parent component to a child component, Vue automatically creates getters and setters for the prop, enabling reactivity. However, when using provide/inject, Vue does not automatically create getters and setters for the injected value, which can lead to reactivity issues.
 -->