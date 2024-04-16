<template>
    <div>hello world</div>
    <!-- if elseif else -->
    <div v-show="!isHidden">
      <h3 v-if="amount === 0">The amount is Zero</h3>
      <h3 v-else-if="amount < 0">The amount is negative</h3>
      <h3 v-else>The amount is greater than zero</h3>
      <button @click="amount--"> - </button>
      <h3>{{ amount }}</h3>
      <button @click="amount--"> + </button>
    </div>
    <button v-on:click="isHidden = !isHidden" >{{ isHidden? 'Show' : 'Hide' }}</button>
  
    <div>
      <!-- <h3 v-for="(names,index) in Country" :key="names">{{ index+1 }} {{ names }}</h3> -->
      <h3 v-for="(names,index) in fullName" :key="names.fname">{{ index+1 }}. Hello, {{ names.fname }} {{ names.lname }}</h3>
      <ul>
        <li v-for="names in Country" :key="names">{{ names }}</li>
      </ul>
      <span v-for="value in info" :key="value">{{ value }}</span>
      <h3 v-for="(value,key,index) in info" :key="value">{{ index }}). {{ key }} : {{ value }}</h3>
      
  
      <!-- conditional list rendering -->
  
      <!-- for rendering multiple use tamplate instead of div or other tags to combine tham as other will appear etra tags where tamplate will not -->
      <template v-for="name in Country" :key="name">
        <h3 v-if="name == 'India'" class="success">{{ name }}</h3>
        <!-- <h3 v-else class="danger">Country is not India</h3> -->
      </template>
    </div>
  
  </template>
  
  <script>
  
  export default {
    name: 'renderingPage',
    data(){
      return{
        name: 'Hardik',
        greet: 'Hello',
        amount: 1,
        isHidden: false,
        Country : ['India', 'Pakistan', 'China'],
        fullName: [
          {fname: 'John', lname: 'Weak'},
          {fname: 'magan', lname: 'lal'}
        ],
        info: {
          name: 'Hardik',
          state: 'gujarat',
          contry: 'India'
        }
      }
    }
  }
  </script>
  
  <style>
  
  
  .danger{
    color : red;
  }
  .underline{
    font-style: italic;
  }
  
  .success{
    background-color: lightgoldenrodyellow;
  
  }
  </style>
  