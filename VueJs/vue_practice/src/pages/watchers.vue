<template>
    <div id="app" class="my-4">
      <header class="d-flex justify-content-evenly">
        <router-link to="/">Home</router-link>
        <router-link to="/rendering-practice">Rendering Practice</router-link>
        <router-link to="/methods-events">methods and events</router-link>
        <router-link to="/binding-practice">binding Practice</router-link>
      </header>
  
      <!-- This is where the content for each route will be rendered -->
      <router-view></router-view>
    </div>
  
    <div>hello world</div>
    <div>
      <!-- computed properties also has getter and setters -->
      <h2>get fullname (computed)-  {{ fullname }}</h2>
      <!-- <hr> -->
      <h3>set full name:</h3>
      <input type="text" ref="fullnameInput" :value="fullname" placeholder="Enter full name space seperated">
      <button @click="changeFullName">changeFUllName</button>
  </div>
  <div>
    <hr>
    <!-- watcher area -->
    <h3>volume: {{ volume }}</h3>
    <button @click="volume+=2">Increase Volume</button>
    <button @click="volume-=2">Decrease Volume</button>
    <!-- these watcher only called when data changes
        but we use these for api fetching when data changes'
        in that case it will not fetch data on first time though data exist with value or empty string
  
        so here is a thing called immediate in watcher which helps you to do this and onload it will call.
     --> <br><br>
     <button @click="immediateCall = !immediateCall">{{ immediateCall? 'Turn off' : 'Turn on calling on load ' }}</button>
     <p>API calling or not check on console</p>
     <input type="text" v-model="apiCallData" placeholder="you can see in console">
  </div>
  <div id="deep">
    <button class="my-2" :style="{'background-color': deepOn? 'green': 'red'}" @click="deepOn= !deepOn">{{ deepOn? 'Deep turned on' : 'Deep turned off' }}</button><br>
    <button @click="insertIntoArray">Update array</button>
    <br>
    Salary : <input type="number" min="1000" max="100000" v-model="employee.salary">
    Leave(per month)<input type="number" min="0" max="6" v-model="employee.leave">
  </div>
  </template>
  
  <script>
  
  
  
  export default {
    name: 'computedAndWatcher',
    data(){
      return{
        fisrtName: 'Hardik',
        lastName: 'Baraiya',
        greet: 'Hello',
        amount: 1,
        a: 0,
        b: 0,
        c: 0,
        gst: 1,
        hasJob: 'no',
        volume: 10,
        apiCallData: 'Hello User',
        immediateCall: false,
        deepOn: false,
        employee: {
          salary: 10000,
          leave: 2
        },
        employeeId : [1,2,3,4,5]
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
      },
      changeFullName(){
        // this.fullname = 'Hello World';
        this.fullname = this.$refs.fullnameInput.value;
      },
      insertIntoArray(){
        let data = this.employeeId.length+1;
        this.employeeId.push(data);
        console.log(this.employeeId)
      },
      insertIntoObj(){
  
      }
    },
    computed: {
      fullname: {
        get(){
          let fullname = this.fisrtName + ' ' + this.lastName;
          console.log(fullname)
          return fullname;
        },
        set(val){
          console.log(val);
          const name = val.split(' ')
  
          this.fisrtName = name[0],
          this.lastName = name[1] || ''
        }
      }
    },
    watch: {
      volume(newVal, oldVal){
        if(newVal > oldVal && newVal==16){
          alert('too high volume')
        }
        else if(oldVal == 0 && newVal < oldVal){
          alert('Already muted can not decrease more');
          this.volume = 0;
        }
        else if(newVal < oldVal && newVal == 0){
          alert('device is muted now!')
        }
      },
    apiCallData: {
      handler(newVal){
        console.log('Calling API: ',newVal);
        // console.log(newVal)
      },
      // immediate: false //will not call onload
      // immediate: this.immediateCall
  
      // we can not dynamically set these values we have to use a function which returns true or false,
      //  in deep attribute below this , there's example of this
      immediate: true //will call onload
    },
    employee: {
      // deep: function(){
      //   return this.deepOn
      // },                         //dynamic not working
      handler(newVal){
        console.log('watcher triggered...',newVal);
      },
      deep: true   // in objects the updation of inner elements in this not watcher detect if deep == false
    },
    employeeId: {
      handler(newVal){
        console.log('watcher triggered...',newVal);
        console.log(this.deepOn)
      },
      // deep: true  // in array updation (push/pop) not detect by watcher if deep == false
      deep : function(){
        console.log(this.deepOn)
         return this.deepOn
      }
      // but if you change the array like employeeId = employeeId.concate([6]) then it will detect though deep is set to false 
        // as it is changing array not updating (push/pop)
    }
  }
  }
  </script>