<template>
  <div class="flyer">
    
  </div>
</template>

<script>
import movieInfo from "../mixins/movieInfo.js";

export default {
    inheritAttrs : false,
    name: 'flyer',
    props: {
        msg: String
    },
    mixins: [movieInfo]
}
</script>

<style lang="scss">

</style>
