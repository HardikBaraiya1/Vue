<template>
    <!-- i want to here make all the form components i.e. input,checkbox,etc.
        it is possible to do this using
        const componentName =  defineCompoent({
            template: ``,
            props:``, ...etc.
        })
        and can use in that file also can use in anywhere by importing these.
        -->
    <!-- <input type="text" class="form-control w-auto mx-auto d-inline"/> -->    <!-- will not affect-->
    <input type="text" class="form-control w-auto mx-auto d-inline" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>    <!-- will not affect, but we also has to handle this value-->
<!-- on use of v-model it automatically updates the value on change but in this case we have to update the value. -->
</template>

<!-- name of the prop for this has to be modelvalue else will not affect and work as expected -->


<script>
export default {
    name: 'formElementInput',
    props: {
        modelValue : String,
    }
}
</script>