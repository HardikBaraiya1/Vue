<template>
    <div class="m-3 border border-2 p-2">
      <h2 class="text-danger">Science Stream</h2>
  
      <p class="text-success">
        Welcome to the science stream! Below are some possible paths or options available to you:
      </p>
      <br>

      <div id="thoughtArea" class="mb-3">
      <label for="thought">Leave your thought for the stream:</label>
      <input type="text" name="thought" v-model="thought">
      </div>

      <!-- Display information about different paths in the science stream -->
      <div class="w-75 mx-auto py-3 p-2 bg-secondary text-light" v-for="path in sciencePaths" :key="path.id">
        <hr>
        <h3>{{ path.name }}</h3>
        <p>{{ path.description }}</p>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : 'scienceStream',
    data() {
      return {
        thought: '',
        sciencePaths: [
          {
            id: 1,
            name: 'Engineering',
            description: 'This path focuses on subjects like mathematics, physics, and chemistry, and prepares you for a career in engineering.'
          },
          {
            id: 2,
            name: 'Medical',
            description: 'This path focuses on subjects like biology, chemistry, and physics, and prepares you for a career in medicine or healthcare.'
          },
          // Add more paths or options as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Component styles */
  </style>
  