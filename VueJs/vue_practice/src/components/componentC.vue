<template>
    <div class="m-3" id="thirdLevel" style="background-color: darkkhaki; height: 20vh;">
        <h3>Hello world</h3>
        <p>Username is : {{ username }}</p>
    </div>
</template>

<script>
    export default {
        name: 'component_c',
        inject: ['username']
    }
</script>