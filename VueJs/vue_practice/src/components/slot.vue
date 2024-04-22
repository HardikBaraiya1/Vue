<template>
    <div class="card w-50 text-center mx-auto py-1 my-3" style="height: auto; box-shadow: 0px 0px 7px grey;">
        <!-- <slot>Default content</slot> --> <!-- normal slot-->

        <!-- we can allow to put one unnamed(default) slot -->
        <div id="card-header" style="background-color: lightblue;">
            <slot name="header"></slot>
        </div> <!-- named slot  -->
        <div id="card-body">
            <slot></slot>
        </div> <!-- named slot  -->
        <div id="card-footer" style="background-color: lightgreen;">
            <slot name="footer"></slot>
        </div> <!-- named slot  -->

        <div id="slotProps">
            <h4 v-for="names in names" :key="names.firstname">
                <!-- {{ names.firstname }}   {{ names.lastname }} -->
                <!-- by this we can not do dynamic like only firstname , starting with lastname like that-->

            <slot name="userNames" :firstname="names.firstname" :lastname="names.lastname"></slot>      <!-- but data are here and we have to pass the data from parent so we bind here that using v-bind : -->
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card_slot1',
    data() {
        return {
            names: [
                {
                    firstname: 'harry',
                    lastname: 'bantai'
                },
                {
                    firstname: 'milan',
                    lastname: 'muddat'
                },
                {
                    firstname: 'sharif',
                    lastname: 'shyam'
                }
            ]
        }
    }

}
</script>