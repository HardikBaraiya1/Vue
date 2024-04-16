<template>
    <div class="border p-2 my-2 w-50 mx-auto">      <!-- by default this will take attrs if below code commented-->
        <h3>Movie name: {{ movieName }}</h3>
        <h2 v-bind="$attrs">is Success: {{ Success? 'Yes': 'No' }}</h2>     <!-- but if below commented then both will have same id so we shoud prevent it's default behaviour-->
    </div>
        <!-- in this div tag has id attribute named something ,  which is default behaviour of vue 
        when only one main tag is there then it will give it id  -->
<!-- <button @click="inheritAttrs= !inheritAttrs">change</button> -->

<!-- but if you uncomment below code none has id attribute as now it has multiple main tags so it will not apply to any by default -->
        <!-- <h2 v-bind="$attrs" class="border p-2 my-2 bg-secondary w-50 mx-auto">Hello world check attributes in this area</h2> -->

        <!-- but in some case we want to give specifically to some tag attriute
            
            for that vue provides $attrs for applying on that
        but using only that you end up with default plus this id ,
            so for preventing default we have to turned off that for the same we have inheriteattr = false in script
            -->


</template>

<script>
export default {
    name: 'movies_comp',
    // data(){
    //     return {
    //         movieName: '',
    //         Success: false
    //     }
    // },
    props: {
        movieName: String,
        Success: Boolean
    },
    inheritAttrs: false                 // this will prevent default behaviour of attributes given , --> for checking comment and uncomment 11 & 36 line of code
}
</script>