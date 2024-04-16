<template>
  <div id="app" class="my-4">
    
    <navBar />

    <!-- This is where the content for each route will be rendered -->
    <router-view></router-view>
  </div>

  <div>hello world</div>
  <div id="provideInject">
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
  name: 'App',
components: {
  // here we will register components as components

  navBar,   //when both name are same we can do like this instead of : , 
  component_A,     //first level component
 
},
data(){
  return {
    
  }
},
provide: {
  username: 'Hardik Baraiya'      // if we directly use this then we can not use that in App means we can not use provide data direcly in this as it build mainly for passing so
},
methods: {},
watch: {},

}
</script>