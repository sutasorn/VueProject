<template>
    <div>
        Posts List
    <table border='1' width='70%' >
         <thead>
        <tr>
           
            <th>id</th>
            <th>userId</th>
            <th>Title</th>
             <th>Body</th>
            
        </tr> 
         </thead>   
           <tbody>
       <tr :key="post.id" v-for="post in posts">
           <td align="center"><Post :id = "post.id"/></td> 
           <td align="center"><Post :userId= "post.userId"/></td>
           <td><Post :title= "post.title" /></td>
           <td><Post :body= "post.body"/></td>
          
           <!-- <post :id = "post.id" :userId="post.userId" :title="post.title" :body="post.body"/> -->
       </tr> 
        </tbody>
     </table> 
     Data
     <table border="1">
          <thead>
        <tr>
           
            <th>id</th>
            <th>userId</th>
            <th>Title</th>
             <th>Complete</th>
        </tr> 
         </thead>   
             <tbody>
                 <tr :key="data.id" v-for="data in datas">
                    <td><Data :id = "data.id"/></td>
                    <td><Data :userId = "data.userId"/></td>
                    <td><Data :title = "data.title"/></td>
                    <td><Data :completed = "data.completed"/></td>
                 </tr>
             </tbody>
     </table>
     Plugin
     <table>
         <thead>
             <th>Name</th>
         </thead>
         <tbody>
                <tr :key="Pluginn.Name" v-for="Pluginn in plugins">
                    <td><Pluginn :Name = "Pluginn.Name"/></td>
                 </tr>
         </tbody>
     </table>
    </div>
</template>
<script>
import {getAllPost} from '@/src/service/post.js'
import {getAllData} from '@/src/service/data.js'
import {getAllPlugins} from '@/src/service/plugins.js'
import Post from '@/components/Post/Post'
import Data from '@/components/Post/Data'
import Pluginn from '@/components/Post/Plugin'
export default {
    components: {
        Post,
        Data,
        Pluginn
    },
    data() {
        let posts = []
        let datas = []
        let plugins = []
        return {
            posts,
            datas,
            plugins
        }
    },
    async created() {
        let raw = await getAllPost()
        let raw1 = await getAllData()
        this.posts = raw
        this.datas = raw1
    }
    
}
</script>
