<template>
    <div id="firstLevel" style="background-color: antiquewhite;">
        This is first level
        <componentB />
    </div>
</template>

<script>
// import component_B from "./components/componentB.vue";
import componentB from "./componentB.vue"

    export default {
        name: 'component_A',
        component: {
            componentB,
        }
    }
</script>