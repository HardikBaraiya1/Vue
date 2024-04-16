<template>
    <div id="secondLevel" style="background-color: burlywood">
        This is Second level
        <component_C />
    </div>
</template>


<script>
import component_C from "./componentC.vue"


export default {
    name: 'componentB',
    component_C,
}
</script>