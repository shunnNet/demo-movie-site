<template>
    <nav>
        <ul class="menu menu--primary">
            <li class="menu__list">
                <router-link class="menu__list__item" to="/index">
                    首頁
                </router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__list__item" to="/collection">
                    收藏
                </router-link>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {
  name: "head-nav"
};
</script>

<style lang="scss">
@import "../scss/env";
    .menu{
        display: flex;
        &__list{
            &__item{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1em;
                &__icon{
                    font-size: 1.5em;
                    margin-right: 0.6em;
                }
            }

        }
    }
    .menu--primary {
        
        .menu__list__item{
            &:hover{
                color: $main;
            }
            @include touch-device-mobile--hover{
                color: inherit;
            }
            
        }
    }
</style>
