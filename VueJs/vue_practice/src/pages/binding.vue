<template>
    <!-- binding text -->
    <div>
      <h3>{{ greet }} {{ name }}</h3>
      <h4 v-text="greet"></h4>
    </div>
    <!-- binging html -->
    <div>
      <h3 v-text="boldTxt"></h3>
      <h3 v-html="boldTxt"></h3>
    </div>
    <!-- but rendreing html is makes vunerable our application  -->
  
    <!-- binding attributes -->
    <div>
      <p v-bind:id="uniqueId">Hello user</p>
      <p :id="uniqueId">Hello user Again</p>
      <button v-bind:disabled="isDisabled" v-on:click="this.isDisabled=!this.isDisabled">Is this button disabled ?</button>
      <button :disabled="!isDisabled" @click="this.isDisabled=!this.isDisabled">Is this button disabled again?</button>
  
      <!-- class binding -->
      <p v-bind:class="status">Hello world</p>
      <p class="underline" :class="status">Hello world Again</p>
  
      <!-- <p v-bind:class="isOkay && okay">Hello news</p> -->
      <p v-bind:class="isOkay? 'success': 'danger'">Hello news</p>
      <p v-bind:class="['success', 'danger']">Hello news again</p>
  
      <p id="usingClass" v-bind:class="{
        success: isOkay,
        'danger': tru
      }">hii there</p>
  
      <h3 :style="succcessStyle">Styled text</h3>
      <h3 :style="[succcessStyle, underline]">Styled text</h3>
    </div>
  
  
    <!-- binding styles -->
    <p v-bind:style="{
      color: redColor,
      fontSize: fontSize + 'px'
    }">
    inline styled
    </p>
  </template>
  
  <script>
  
  export default {
    name: 'attributesBindning',
    data(){
      return{
        name: 'Hardik',
        greet: 'Hello',
        boldTxt: '<u>How you doing?</u>',
        redColor: 'red',
        idName: 'uniqueId',
        isDisabled: true,
        fontSize : 10,
        status: 'danger',
        isOkay: true,
        succcessStyle: {
          color: 'green',
          fontSize: '24px',
          'backgorund-color' : 'grey'
        }
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
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
  