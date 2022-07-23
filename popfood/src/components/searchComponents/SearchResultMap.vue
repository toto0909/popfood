<template>
    <div>
        <v-container fluid class="text-center">
            <!-- 位置情報未取得の場合-->
            <div v-if="getLatitude == 0" style="padding-top: 3rem;">
                <p>位置情報を取得して下さい</p>
            </div>

            <!-- 位置情報取得ずみの場合-->
            <div v-if="getLatitude > 0">
                <p style="font-size: 0.8rem; color:#888888; margin-bottom: 0;">検索半径</p>
                <v-card-text style="padding-top: 0">
                    <v-slider
                        v-model="range_setting"
                        v-on:mouseup="range = range_setting"
                        step="1"
                        ticks="always"
                        tick-size="3"
                        color="#afd147"
                        thumb-color="#afd147"
                        track-color="#DDDDDD"
                        :tick-labels="range_scale"
                        :min="1"
                        :max="5"
                    ></v-slider>
                </v-card-text>
                <p>{{getQuery}}</p>
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
import { hotpepper } from '@/plugins/api'

export default Vue.extend({
    name: 'SearchResultMap',
    data: () => ({
        lat: 0,   //緯度
        lan: 0,   //経度
        range_setting: 3, //スライダー操作中の検索半径(1メモリ毎にrangeに変更入れてAPI叩かない為の緩衝材)
        range: 3,         //検索半径
        range_scale: ['300m','500m','1km','2km','3km'] //検索半径範囲ラベル用
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
        },

        // 都道府県/地域情報を含まないクエリを生成
        // 強制的に緯度・経度・検索半径を付与して返す
        // このクエリはvuexで管理しているクエリとは独立してここでのみ使用
        getQuery: function(): string {
            //クエリ初期化
            var query: string = hotpepper
            //クエリ生成
            if(this.$store.getters['search/getKeyword']){
                query = query + '&keyword=' + this.$store.getters['search/getKeyword']
            }
            if(this.$store.getters['search/getGenre'].length > 0){
                for(const gen of this.$store.getters['search/getGenre']){
                    query = query + '&genre=' + gen
                }
            }
            if(this.$store.getters['search/getFreeDrink']) {
                query = query + '&free_drink=1'
            }
            if(this.$store.getters['search/getFreeFood']) {
                query = query + '&free_food=1'
            }
            if(this.$store.getters['search/getPrivateRoom']) {
                query = query + '&private_room=1'
            }
            if(this.$store.getters['search/getParking']) {
                query = query + '&parking=1'
            }
            if(this.$store.getters['search/getCard']) {
                query = query + '&card=1'
            }
            if(this.$store.getters['search/getCharter']) {
                query = query + '&charter=1'
            }
            if(this.$store.getters['search/getMidnight']) {
                query = query + '&midnight=1'
            }
            if(this.$store.getters['search/getChild']) {
                query = query + '&child=1'
            }
            if(this.$store.getters['search/getPet']) {
                query = query + '&pet=1'
            }
            return query + '&lat=' + this.getLatitude + '&lng=' + this.getLongitude + '&range=' + this.range
        }
    },
    watch: {
        // vuex(GPS)の緯度の変更を検知
        getLatitude(){
            this.$nextTick(() => {
                //緯度に変更があった時実行(基本的に初回1回のみ)
                console.log("Map 緯度")
            })
        },
        // vuexのクエリの変更を検知
        getQuery() {
            this.$nextTick(() => {
                //クエリに変更があった時実行
                console.log("Map クエリ")
            })
        },
        getLoadingState(){}
    }
})
</script>

<style scoped>
.v-slider__tick-label{
    color: #888888;
}
</style>