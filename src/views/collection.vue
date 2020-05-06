<template>
    <section class="box-md pos-r">
        <h3 class="h2 bd-b--contrast mg-b-100">我的收藏</h3>
        <transition name="fade" mode="out-in">
            <transition-group v-if="listLengh>0" tag="ul" name="fade" appear 
                            class="grid">
                <li v-for="movie in collectionPlayList" :key="movie.id"
                    class="grid__u__1-1">
                    <component :is="'card'"
                            :movie="movie"></component>
                </li>
            </transition-group>
            <p v-else
               class="fz-120 fs-italic text-center"
               key="showIfNoMovieCollection">
                   您尚未收藏任何影音
            </p>
        </transition>
    </section>
    <!-- <loading loader = "spinner"
                :active.sync ="waitAjax"
                :can-cancel="false" 
                :is-full-page="false"></loading> -->
</template>

<script>
import Loading from 'vue-loading-overlay';

import Card from '@/components/card.vue';
export default {
    inheritAttrs: false,
    name: 'collection',
    props: {
        collection : {
            type : Object,
            default : {},
        },
        waitAjax: {
            type: Boolean,
            default: true
        },
        
    },
    components: {
        Card,
        Loading,
    },
    computed:{
        collectionPlayList(){
            var result = JSON.parse(JSON.stringify(this.collection));
            return result
        },
        listLengh(){
            return Object.keys(this.collectionPlayList).length
        }
    },
}
</script>
