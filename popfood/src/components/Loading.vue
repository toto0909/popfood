<template>
    <div v-show="getLoadingState" id="loading" class="loading">
        <img class="animation" src="@/assets/loading.gif">
    </div>
</template>

<script lang="ts">
/* 
    読み込み中に画面全体を覆うローディングコンポーネント
    vuexの"loading"の状態(T/F)で制御
*/
import Vue from 'vue'
export default Vue.extend({
    computed: {
        // vuexからローディング状態を取得
        getLoadingState: function(): boolean {
            return this.$store.getters['search/getLoading']
        }
    },
    watch: {
        // vuexのローディング状態を監視
        getLoadingState() {
            this.$nextTick(() => {
            })
        }
    }
})
</script>

<style scoped>
/*
    画面を覆うアニメーションを表示
    その間あらゆる操作を無効にする(z-index最大指定)
*/
#loading{
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba(255,255,255,1.0);
    z-index: 2147483646;
}
.loading .animation{
    max-width: 100%;
    height: auto;
    border: 0;
    position: absolute;
    z-index: 2147483647;
    background-color:transparent;
    top: 30%;
    right: 38%;
    width: 25%;
}
</style>