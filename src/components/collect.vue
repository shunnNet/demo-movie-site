<template>
    <button @click="collect()" 
            :class="classObj">
        <span v-if="movie.collected"> 取消收藏 </span>
        <span v-else> 收藏 </span>
    </button>
</template>

<script>
export default {
    name: "collect",
    
    props:[ "movie" ],
    computed:{
        classObj(){
            return {
                "btn--main" : !this.movie.collected,
                "btn--sub" : this.movie.collected,
            }
        }
    },
    methods: {
        collect(collected){
            const action = this.movie.collected ? "uncollect" : "collect";
            this.$bus.$emit(action, this.movie, this);
        }
    },
}
</script>