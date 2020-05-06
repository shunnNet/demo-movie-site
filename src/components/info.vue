<template>
    <article class="info">
        <h4 class="info__title">
            {{ heading }}
        </h4>
        <p class="info__subTitle">
            {{ owner }}
        </p>
        <p class="info__desc">
            {{ desc }}
        </p>
    </article>
</template>
<script>
export default {
    name : "info",
    props:["heading","owner","desc"]
}
</script>

<style lang="scss">
@import '../scss/env.scss';
    .info{
        &__desc, &__title, &__subTitle{
            @extend %text-ellipsis;
        }
        &__title{
            font-size: 1.2em;
            font-weight: bold;
        }
        &__subTitle{
            line-height: 1.2;
            font-weight: bold;
        }
    }
</style>