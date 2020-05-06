<template>
    <article class="detail">
        <h4 class="detail__title">
            {{ heading }}
        </h4>
        
        <p class="detail__desc">
            {{ desc }}
        </p>
    </article>
</template>
<script>
export default {
    name : "info-detail",
    props:["heading","owner","desc"]
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .detail{
        margin-bottom: 2em;
        &__title{
            font-size: 1.75em;
            font-weight: bold;
            border-bottom: 2px solid $contrast;
            margin-bottom: 0.75em;
        }
        &__subTitle{
            line-height: 1.2;
            font-weight: bold;
        }
        &__desc{
            word-break: break-all;
        }
    }
    
</style>