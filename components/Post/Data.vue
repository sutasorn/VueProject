<template>
    <div>
            {{ userId }}
            {{ id }} 
            {{ title }} 
            {{ completed }}  
    </div>
</template>
<script>
export default {
    props: {
        userId: {},
        id: {},
        title: {},
        completed: {}
    }
    
}
</script>