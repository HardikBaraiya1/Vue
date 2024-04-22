<template>
    <div class="m-3 border border-2 p-2">
      <h2 class="text-danger">Arts Stream</h2>
  
      <p class="text-success">
        Welcome to the arts stream! Below are some possible paths or options available to you:
      </p>
      <div id="thoughtArea" class="mb-3">
      <label for="thought">Leave your thought for the stream:</label>
      <input type="text" name="thought" v-model="thought">
      </div>

      <!-- Display information about different paths in the arts stream -->
      <div class="w-75 mx-auto py-3 p-2 bg-secondary text-light" v-for="path in artsPaths" :key="path.id">
        <h3>{{ path.name }}</h3>
        <p>{{ path.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'artsStream',
    data() {
      return {
        thought : '',
        artsPaths: [
          {
            id: 1,
            name: 'Humanities',
            description: 'This path focuses on subjects like history, literature, and philosophy, and prepares you for careers in education, research, or cultural institutions.'
          },
          {
            id: 2,
            name: 'Fine Arts',
            description: 'This path focuses on subjects like visual arts, performing arts, and design, and prepares you for careers in art galleries, museums, or creative industries.'
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
  