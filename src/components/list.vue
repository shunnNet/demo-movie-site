<template>
    <div class="list">
        <h3 class="list__title">
            真心推薦
        </h3>

        <ul class="grid">
            <li v-for="item in onAir"
                class="grid__u__1-4 grid__u__1-3-scr grid__u__1-2-pad grid__u__1-1-mb">
                <component :is="'flyer'"
                           :movie="item"></component>
            </li>
        </ul>
        <paginate
            v-model="page"
            :page-count="pageCount"
            :page-range="3"
            :margin-pages="1"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagi'"
            :active-class="'pagi__item--active'"
            :page-link-class="'pagi__item'"
            :prev-link-class="'pagi__item'"
            :next-link-class="'pagi__item'"
            >
        </paginate>
    </div>
    <!-- :click-handler="functionName" -->
</template>

<script>
import Flyer from '@/components/flyer.vue';
import Paginate from 'vuejs-paginate';



export default {
    name : "list",
    data() {
        return {
            page: 1,
            itemPerPage: 16,
        }
    },
    props: {
        pool : {
            type : Array,
            default : [],
        },
        loading: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        onAir(){
            const from= this.itemPerPage * (this.page-1);
            const to  = this.itemPerPage * this.page;
            return this.pool.slice(from,to);
        },
        pageCount(){
            console.log(Math.ceil(this.pool.length / this.itemPerPage))
            return Math.ceil(this.pool.length / this.itemPerPage)
        }
    },
    components:{
        Paginate,
        Flyer,
    }
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .list{
        position: relative;
        min-height : 600px;
        &__title{
            font-size: 1.75em;
            font-weight: bolder;
            text-align: center;
            border-bottom: 2px solid $contrast;
            margin-bottom: 0.5em;
        }
        &__body{
            display: flex;
            flex-wrap: wrap;
        }
    }

    .pagi{
        position: sticky;
        bottom: 0;
        display: flex;
        justify-content: center;
        font-size: 1.2em;
        font-weight: bold;
        // background-color: $lightSub;
        color: $contrast;
        background-color: $sub;
        &__item{
            display: block;
            user-select: none;
            padding : 1em;
        }
        &__item--active{
            color : $main
        }
        @include pad{
            font-size: 1em;
        }
        
    }
</style>