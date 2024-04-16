<template>
    <h3>
        Hello User, <br>
        <!-- without prop -->

        <!-- props gives you to use keywords and make it some dynamic as in repeatation with diff data 
            it has meaning like greeting 3 peaple instead of greeting same for 3 times in reuse -->

        Good morning, {{ name }} known as {{ knownAs }}
    </h3>
</template>

<script>
export default {
    name: 'greetingMsg',
    props: ['name','knownAs'],
    data(){
        return {}
    }
}
</script>