<template>
    <figure class="thunmbnail pos-r">
        <img :src="imgsrc"/>
        <div class="pos-a bg-sub b-0 r-0 pd-050">{{ time }}</div>
    </figure>
</template>
<script>
export default {
    name : "thunmbnail",
    props:["imgsrc","duration"],
    computed:{
        time(){
            var result = this.duration.match(/P([0-9]*)T*([0-9]*)M*([0-9]*)S*/);
            result[1] = result[1] ? result[1]+"d" : "";
            result[2] = result[2] ? result[2]     : "0";
            result[3] = result[3] ? result[3] : "00";
            result[3] = result[3].length === 2 ? result[3] : "0" + result[3];
            return result.slice(1,4)
                         .filter(itm=> itm)
                         .join(":")
        }
    }
}
</script>

<style lang="scss">
    
</style>