<template>
    <div>
       <button @click="clickMethod()" type="button">Count Click</button>
       <div style="height: 500px;"></div>
       <a @click.prevent='clicklink()' href="mypath/ajax">Link</a>
       <div style="height: 1000px;"></div>

    </div>
</template>
<script>
export default {
    methods:{
        clickMethod() {
            alert('cccc')
         },
         clicklink() {
             e.preventDefault()
         }
    }
   
}
</script>
