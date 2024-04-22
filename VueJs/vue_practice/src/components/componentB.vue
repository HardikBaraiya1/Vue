<template>
    <div id="secondLevel" style="background-color: burlywood; height: 40vh;" class="m-3">
        This is Second level
        <component_C />
    </div>
</template>


<script>
import component_C from "./componentC.vue"


export default {
    name: 'componentB',
    components: {
        component_C
    }
}
</script>