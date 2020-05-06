<template>
    <div id="app" class="box-full">
        <loading loader = "spinner"
                :active.sync ="waitAjax"
                :can-cancel="false" 
                :is-full-page="true"></loading>
        <head-nav class="box-stickyNav bg-body z-2"></head-nav>
      
        <main class="main box-lg">
            <router-view v-if="!waitAjax"
                         :recommend="recommend"
                         :pool="recommend"
                         :collection="collection"
                         :waitAjax="waitAjax" />
        </main>
  </div>
</template>

<script>
import ajax from "./mixins/ajax.js";
import Loading from 'vue-loading-overlay';
import headNav from '@/components/head_nav.vue';

export default {
    data(){
        return {
            recommend_proto : [],
            viewMode: "Card",
            waitAjax : true,
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src:"/public/video.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            collection : null,
        }
    },
    mixins:[ajax],
    created(){
        
        this.initCollection();
        this.getData()
        this.$bus.$on('collect', (movie,btn) => {
            this.collect(movie);
            btn.collected = true;
            movie.collected = true;
            movie.link+="?list=mylist";
            console.log(movie.link);
            
        })
        this.$bus.$on('uncollect', (movie,btn) => {
            this.uncollect(movie);
            btn.collected = false;
            movie.collected = false;
            movie.link.replace("?list=mylist","");
        })
    },
    watch:{
        collection(newValue){
            console.log(newValue,"watch");
            
            localStorage.setItem("collection",JSON.stringify(newValue));

        }
    },
    components: {
        headNav,
        Loading
    },
    computed:{
        recommend(){
            let result = [];
            let protos = this.recommend_proto;
            for (let i = 0, l=protos.length; i<l; i++) {
                const movie = JSON.parse(JSON.stringify(protos[i]));
                movie.collected =  this.collection[movie.id] !== undefined;
                result.push(movie);
            }
            return result;
        },
    },
    methods: {
        getData(){
            this.ytGetList().then(response=>{
                this.recommend_proto = response;
                this.waitAjax = false;
            })
        },
        initCollection(){
            let collection = localStorage.getItem("collection");
            collection = collection ? JSON.parse(collection) : {};
            this.collection = collection;
        },
        collect(movie){
            console.log("collect");
            this.$set(this.collection,movie.id,movie);
            // console.log(this.collection)
        },
        uncollect(movie){
            console.log("uncollect");
            this.$delete(this.collection,movie.id);
            // console.log(this.collection)
        }
    },
}
</script>

<style lang="scss">
    .main{
        padding: 0 20px;
    }
    .box-stickyNav{
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
    }
</style>