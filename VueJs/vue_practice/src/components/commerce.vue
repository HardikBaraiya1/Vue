<template>
    <div class="m-3 border border-2 p-2">
      <h2 class="text-danger">Commerce Stream</h2>
  
      <p class="text-success">
        Welcome to the commerce stream! Below are some possible paths or options available to you:
      </p>
      <div id="thoughtArea" class="mb-3">
      <label for="thought">Leave your thought for the stream:</label>
      <input type="text" name="thought" v-model="thought">
      </div>

      <!-- Display information about different paths in the commerce stream -->
      <div class="w-75 mx-auto py-3 p-2 bg-secondary text-light" v-for="path in commercePaths" :key="path.id">
        <h3>{{ path.name }}</h3>
        <p>{{ path.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'commerceStream',
    data() {
      return {
        thought : '',
        commercePaths: [
          {
            id: 1,
            name: 'Accounting and Finance',
            description: 'This path focuses on subjects like accounting, finance, and economics, and prepares you for careers in finance, banking, or accounting.'
          },
          {
            id: 2,
            name: 'Business Administration',
            description: 'This path focuses on subjects like management, marketing, and business administration, and prepares you for careers in business management or entrepreneurship.'
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
  