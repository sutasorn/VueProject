<template>
    <div>
      <button @click="toggle" class="btn" type="button">ToggleButton</button>
        <div ref="collapsePanel" class="collapse">
           This collapse
        </div>
        <div>
             <button @click="button" class="btn btn-primary" type="button">Button</button>
        </div>
        <div ref="hellow" >
            Hellow
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toggle() {
            $(this.$refs.collapsePanel).collapse('toggle')
        },
        button () {
            $(this.$refs.hellow).hide('button')
        }
    }
}
</script>
