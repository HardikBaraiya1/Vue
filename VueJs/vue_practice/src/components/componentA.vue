<template>
    <div id="firstLevel" style="background-color: antiquewhite; height: 70vh;" class="m-3">
        This is first level
        <componentB />
    </div>
</template>

<script>
import componentB from "./componentB.vue";

    export default {
        name: 'component_A',
        components: {
            componentB,
        }
    }
</script>