<template>
    <div>
       <button ref="myButton" type="button">Count Click</button>
    </div>
</template>
<script>
//import $ from 'jquery'
export default {
    mounted() {
      //  $('myButton').on('click',function(){})
      $(this.$refs.myButton).on('click',e => {
          alert('ClickMe')
           $(this.$refs.myButton).hide()
      })
    }
}
</script>
