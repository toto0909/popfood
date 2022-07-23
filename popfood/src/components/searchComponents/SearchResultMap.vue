<template>
    <div>
        <v-container fluid class="text-center">
            <!-- 位置情報未取得の場合-->
            <div v-if="getLatitude == 0" style="padding-top: 3rem;">
                <p>位置情報を取得して下さい</p>
            </div>
            <!-- 位置情報取得ずみの場合-->
            <div v-if="getLatitude > 0">
                <p>位置情報取得済み</p>
            </div>
            <!-- 位置情報取得に失敗した場合-->
            <div v-if="getLatitude < 0">
                <p style="font-size: 0.7rem; color: #FF0000; padding-top: 2rem;">位置情報の取得に失敗しました。再度お試し下さい。</p>
            </div>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchResultMap',
    data: () => ({
        lat: 0,   //緯度
        lan: 0,   //経度
    }),
    computed: {
        //緯度・経度を取得
        getLatitude: function(): number {
            return this.$store.getters['search/getLat'] //vuexから緯度取得
        },
        getLongitude: function(): number {
            return this.$store.getters['search/getLan'] //vuexから経度取得
        },
        //ローディング状態を取得
        getLoadingState: function(): boolean {
            return this.$store.getters['search/getLoading'] //vuexからロード状況取得
        }
    },
    watch: {
        getLatitude(){

        },
        getLoadingState(){

        }
    }
})
</script>

<style scoped>
</style>