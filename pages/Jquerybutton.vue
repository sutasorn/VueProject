<template>
    <div>
       <button id="myButton" type="button">Count Click</button>
    </div>
</template>
<script>
//import $ from 'jquery'
export default {
    mounted() {
      //  $('myButton').on('click',function(){})
      $('#myButton').on('click',e => {
          alert('ClickMe')
      })
    }
}
</script>
