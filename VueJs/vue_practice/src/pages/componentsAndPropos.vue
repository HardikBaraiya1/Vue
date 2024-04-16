<template>
    <div id="app" class="my-4">
      
      <navBar />
  
      <!-- This is where the content for each route will be rendered -->
      <router-view></router-view>
    </div>
  
    <div>hello world</div>
    <div id="compoprops">
      <!-- using static value -->
      <greet name="Umar" knownAs='Age'></greet>
      
      <!-- also we can use self closed in this too -->
  
      <greet :name="name" :knownAs="ka"/>    
  
      <hr>
      <div id="buttons" class="d-flex justify-content-evenly">
    <button v-on:click="articleShow = !articleShow" class="btn border" :class="articleShow? 'bg-danger' : 'bg-success'">{{ articleShow? 'Hide Article area' : 'Show Article' }}</button>
    <button v-on:click="movieShow = !movieShow" class="btn border" :class="movieShow? 'bg-danger' : 'bg-success'">{{ movieShow? 'Hide Movie area' : 'Show Movie' }}</button>
  
      </div>
      <hr>
      <!-- dynamic component rendering -->
      <div id="articleComp" v-show="articleShow">
            <!-- form practice too in this  -->
  
      <!-- We have an @submit.prevent event listener on the form that prevents 
          the default form submission behavior and calls the handleSubmit method when the form is submitted. -->
      <form @submit.prevent="loadArticle" >
        <input class="form-control m-1 w-auto mx-auto" type="text" v-model="article.title" placeholder="Enter title of the article">
        <label class="mt-2" for="likes">How many likes it has?</label>
        <input name="likes" class="form-control m-1 w-auto mx-auto" type="number" min="0" v-model="article.likes" >
        <label class="form-check-label m-1" for="publish">Is this article published?</label>
        <input class="form-check-input m-2" type="checkbox" name="publish" v-model="article.isPublished">
        <br>
        <button class="btn bg-danger me-4" type="reset">Reset</button>
        <button class="btn bg-success ms-4" type="submit">Submit</button>
      </form>
  
      <div id="dynamicComponent">
        <!-- In Vue.js, the <component> element is a built-in way to dynamically render different components 
          based on data or conditions. It's a versatile and powerful feature that allows you to switch between 
          different components dynamically. -->
          <component :is="articleComponent" v-if="articleComponent" :title="article.title" :likes="article.likes" :isPublished="article.isPublished"></component>
          <h3 v-if="!articleComponent" class="border p-2 m-1 bg-secondary">Waiting for Submitting new data.</h3>
  
          <!-- here is and v-if aren't same -->
          <!-- :is is used to dynamically bind the component to be rendered, and the component remains mounted in the DOM even if it's not currently rendered.
              v-if is used to conditionally render or remove the entire <component> element from the DOM based on a condition. -->
  
      </div>
      </div>
  <!-- attrs in components passing -->
      <div id="moviesNonPropsAttrsPractice" v-show="movieShow">
        <Movies id="givenTag" movieName="Shaitaan" Success="true"></Movies>
      </div>
    </div>
   
  </template>
  
  <script>
  import  navBar  from "./components/nav.vue";
  import greetingMsg from './components/greet.vue';
  import Article from "./components/article.vue";
  import Movies from "./components/movies.vue";
  
  
  export default {
    name: 'ComponentsProps',
  components: {
    // here we will register components as components
  
    navBar,   //when both name are same we can do like this instead of : , 
    greet: greetingMsg,
    Article,
    Movies,
  },
  data(){
    return {
      name: 'Zindagi',
      ka: 'Life',
      article: {
        title: '',
        likes: 0,
        isPublished: false 
      },
      articleComponent: null,
      articleShow: false,
      movieShow: true,
    }
  },
  methods: {
    loadArticle(){
      console.log(this.article);
      
      // Load MyDynamicComponent dynamically based on form submission data
      this.articleComponent = Article 
    }
  },
  watch: {
    // it will calling article on change of a key in title or price. so, to prevent that i'll add this
    article:{
      handler(){
        // console.log('watcher triggered:',newval);
        this.articleComponent = null
      },
      deep: true
      // live change you can turn on / off from here
    }
  }
  }
  </script>