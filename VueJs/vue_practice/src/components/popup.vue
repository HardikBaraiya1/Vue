<template>
    <div id="popupArea" class="card my-3" style="box-shadow: 0px 0px 7px grey;">
        <h5 class="card-header">Popup</h5>
          <div class="card-body">
            <h5 class="card-title">Emit-Custom Events</h5>
            <p class="card-text">
              <b class="text-danger">Problem:</b> for closing popup the var is availale in parent but we want to close from here so we cant change that value from here child and cannot close directly. <br>
              <b>So,</b> emit will tell parent a custom events and we can listen there and handle as normal events like @click
            </p>
            <div id="buttons" class="d-flex justify-content-evenly">
              <button @click="$emit('closeMe')" class="btn btn-danger">Close popup</button>        <!-- without passing data-->

                      <!-- hardcodedMsg-->          
              <button @click="$emit('closedMeBy','Hello i am closing this popup from popup child component')" class="btn btn-warning">Close popup & Send Msg</button>        <!-- with passing data, for the same we can pass Msg in second argument-->
              
            </div>
                      <!-- DynamicMsg-->            
              <div id="dynamicMsg" class="d-flex justify-content-between mt-4">
              <input type="text" v-model="Msg" class="form-control w-50 d-inline-block">
              <button @click="$emit('closedMeBy',Msg)" class="btn btn-primary">Close popup & Send Msg</button>        <!-- with passing data, for the same we can pass Msg in second argument-->
              </div>
            <!-- Problem: for closing popup the var is availale in parent but we want to close from here so we cant change that value from here child and cannot close directly -->
            <!-- So, emit will tell parent a custom events and we can listen there and handle as normal events like @click -->
          </div>
    </div>
</template>


<script>
export default {
  name: 'popup_emitUsage',
  // emits: ['closeMe','closedMeBy'],
  emits: {                                  //validatiing which gives warning if returned false else true
    closeMe: ()=>{return true},
    closedMeBy: (Msg)=>{
      if(Msg =='') return false     
      else return true;
    }
  },
  data(){
    return {
      Msg : '',
    }
  }
}
</script>