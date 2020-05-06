<template>
    <div>
        <section class="d-flex f-main-center pd-t-500 pd-b-500" key="標題">
            <h2 class="display-1 display-3-pad color-main">蒐集所有的影音吧!</h2>
        </section>
        
        <list v-if="!underPad"
              :pool="recommend"
              :loading="waitAjax"></list>

        <ul v-else class="grid min-h-300">
            <li v-for="movie in recommend" 
                class="grid__u__1-2-pad grid__u__1-1-mb">
                <component :is="'flyer'"
                           :movie="movie"></component>
            </li>
        </ul>
    </div>

</template>

<script>
import List from '@/components/list.vue';
import Flyer from '@/components/flyer.vue';

export default {
    inheritAttrs: false,
    name: 'index',
    data() {
        return {
            underPad: false
        }
    },
    components: {
        List,
        Flyer
    },
    props: ["recommend","waitAjax"],
    created() {
        
        const mediaQuery = matchMedia("(max-width : 48em)");
        this.underPad = mediaQuery.matches;

        const vm = this;
        mediaQuery.addListener(function(ev){
            vm.underPad = this.matches;
        })
    },

}
</script>
<style lang="scss">

</style>
