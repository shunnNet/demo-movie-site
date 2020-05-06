<template>
    <section class="card card--main">
        <router-link  :to="movie.link" class="card__body">
            <thunmbnail :imgsrc="movie.thumbnails.default.url"
                        :duration="movie.duration"
                        class="card__body__thunmb-L"></thunmbnail>
            <Info class="card__body__content"
                  :heading="movie.heading" 
                  :owner="movie.owner"
                  :desc="movie.desc"></Info>
        </router-link >
        <div class="card__tool-RB">
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
    name: 'card',
    mixins: [movieInfo],
    components:{
        thunmbnail,
        Info,
        Collect,
    }
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .card{
        position: relative;
        &:hover{
            .card__tool-RB{
                display: flex;
            }
        }
    }
    .card__body{
        display: flex;
        padding: 0.5em;
        &__thunmb-L{
            margin-right: 1em;
        }

        &__content{
            flex: 1 1 1px;
            min-width: 0;
            width: 0;
        }
    }
    .card__tool-RB{
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

    .card--main{
        transition: .2s;
        &:hover{
            background-color: $sub;
            .card__content{
                color: $main;
            }
        }
    }
</style>
