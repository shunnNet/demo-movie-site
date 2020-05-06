<template>
    <article class="grid" id="player">
        <div class="grid__u__2-3 grid__u__1-1-pad pd-200">
            <video-player class="mg-b-100" :options="videoOptions">
            </video-player>
            <info-detail :heading="onAir.heading"
                         :owner="onAir.owner"
                         :desc="onAir.desc"></info-detail>
        </div>
        <div class="grid__u__1-3 grid__u__1-1-pad">
            <div class="playlist" v-if="$route.query.list === 'mylist'">
                <ul>
                    <li v-for="movie in collection" :key="movie.id">
                        <component :is="'card'"
                                :movie="movie"></component>
                    </li>
                </ul>
            </div>

            <ul>
                <li v-for="movie in playList" :key="movie.id">
                    <component :is="'card'"
                            :movie="movie"></component>
                </li>
            </ul>
        </div>
        
    </article>
</template>

<script>
import VideoPlayer from "@/components/player.vue";
import Card from '@/components/card.vue';
import infoDetail from '@/components/infoDetail.vue';
//https://kknews.cc/zh-tw/tech/j9j93bl.html 
// load m3u8
export default {
    inheritAttrs: false,
    name: 'theater',
    data() {
        return {
            listLimit: 16,
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                	{
                		src:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
                		type: "application/x-mpegURL"
                    }
                    
                ]
            }
        }
    },
    props:["pool","collection"],
    computed:{
        playListTotal(){
            var targetId = this.$route.params.id;
            var copy = this.pool.map(itm => itm);
            var targetIndex = copy.findIndex(itm => itm.id === targetId)
            copy.splice(targetIndex,1);
            return copy
        },
        playList(){
            return this.playListTotal.slice(0,this.listLimit)
        },

        onAir(){
            var targetId = this.$route.params.id;
            return this.collection[targetId] ? this.collection[targetId] 
                 : this.pool.find(itm => itm.id === targetId)
        }
    },
    created() {
        var scrollEle = document.scrollingElement || document.documentElement;
        scrollEle.scrollTo(0,0)
    },
    watch: {
        "$route" : function(){
            var scrollEle = document.scrollingElement || document.documentElement;
            scrollEle.scrollTo(0,0)

        }
    },
    components: {
        VideoPlayer,
        Card,
        infoDetail,
    }
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .video-js{
        width: 100%;
        height : 360px;
    }
    .playlist{
        border: 5px solid $sub;
    }
</style>