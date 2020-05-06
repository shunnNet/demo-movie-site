import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue';
import Collection from '@/views/collection.vue';
import Theater from '@/views/theater.vue';

Vue.use(VueRouter)

  const routes = [
    {
        path : "/index",
        component : Index,
    },
    {
        path : "/collection",
        component : Collection,
    },
    {
        path : "/theater/:id",
        component : Theater,
    },
    {
        path : "*",
        redirect : "/index"
    },
]

const router = new VueRouter({
  routes
})

export default router
