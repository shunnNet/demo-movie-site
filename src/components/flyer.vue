<template>
    <section class="flyer flyer--main">
        <router-link :to="movie.link" class="flyer__body">
            <thunmbnail :imgsrc="movie.thumbnails.high.url"
                        :duration="movie.duration"
                        class="flyer__body__thunmb"></thunmbnail>
            <Info class="flyer__body__content"
                  :heading="movie.heading" 
                  :owner="movie.owner"
                  :desc="movie.desc"></Info>
        </router-link>
        <div class="flyer__tool-RB">
            <collect :movie="movie"></collect>
        </div>

    </section>
</template>

<script>
import movieInfo from "../mixins/movieInfo.js";
import thunmbnail from "./thunmbnail.vue";
import Info from "./info.vue";
import Collect from "./collect.vue";

export default {
    inheritAttrs : false,
    name: 'flyer',
    mixins: [movieInfo],
    components:{
        thunmbnail,
        Info,
        Collect
    },
    methods: {
        doSome(){
            this.$bus.$emit('asc', "Alert MSG");
        }
    },
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .flyer{
        position: relative;
        &:hover{
            .flyer__tool-RB{
                display: flex;
            }
        }
    }
    .flyer__body{
        @extend %no-pointer-touch-device;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        &__thunmb{
            margin-bottom: 1em;
        }

        &__content{
            min-width: 0;
        }
    }
    .flyer__tool-RB{
        position: absolute;
        right: 0.5em;
        bottom: 0.5em;
        display: none;
        @include pad{
            position: static;
            display: flex;
            justify-content: flex-end;
            margin-right: 0.5em;
        }
    }

    .flyer--main{
        transition: .2s;
        &:hover{
            background-color: $sub;
            .flyer__body__content{
                color: $main;
            }
        }
    }
</style>
