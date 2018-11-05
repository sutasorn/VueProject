<template>
    <div>
        <!-- Posts List
        <div :key="posts.id" v-for="posts in posts">
                The id is {{ posts.id }} <br/>
                title id is {{ posts.title }} <br/>
        </div> -->
         
              {{ id }}
               {{ userId }} 
            {{ title }} 
               {{ body }}  
         <!-- id:  <br/>
        userId: <br/>
        title:{{ title }}<br/>
        body: {{ body }} -->
    </div>
</template>
<script>
export default {
    props: {
        id: {},
        userId: {},
        title: {},
        body: {}
    }
}
</script>

