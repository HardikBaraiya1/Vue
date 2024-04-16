<template>
  <div>hello world</div>
  <!-- methods -->
  <div>
    <input type="number" v-model="a">
    <input type="number" v-model="b">
    <input type="number" v-model="c">
    <br>
    <input type="number" v-model="gst" placeholder="Gst %">
    <p>{{ a + b + c }}</p>
    <h3>Add using method - {{ add() }}</h3>
    <h3>Gst amount using method - {{ findGst() }}</h3>
  </div>
  <!-- events done in nuxt -->
  <!-- for multiple func cll on a event it is , seperated like @click='f1,f2' -->
  <input type="checkbox" v-model="hasJob" true-value="yes" false-value="no">Do you have any job right now?
  <br>
  answer= <span>{{ hasJob }}</span>
</template>

<script>

export default {
  name: 'methodsAndEvents',
  data(){
    return{
      name: 'Hardik',
      greet: 'Hello',
      amount: 1,
      a: 0,
      b: 0,
      c: 0,
      gst: 1,
      hasJob: 'no'
    }
  },
  methods: {
    add(){
      return this.a + this.b + this.c;
    },
    // use normal function intead of arrow function
    findGst(){
      const sum = this.a + this.b + this.c;
      return sum * (this.gst*0.01); 
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
