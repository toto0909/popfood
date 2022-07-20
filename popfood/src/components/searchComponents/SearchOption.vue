<template>
    <div>
        <!--検索キーワード-->
        <div class="step">
            <v-text-field
                dense
                rounded
                v-model="keyword"
                @change="setKeyword(keyword)"
                outlined
                label="検索キーワード"
                prepend-inner-icon="mdi-magnify"
                color=#afd147
            ></v-text-field>
        </div>
        <p>{{query}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { hotpepper } from '@/plugins/api' //検索APIエンドポイント呼び出し

export default Vue.extend({
    name: 'SearchOption',
    data: () => ({
        query_base: hotpepper, //検索URL&Query初期値
        query: hotpepper,   //検索URL&Query格納用
        prefecture: "",
        keyword: "",
        large_area: "",
        middle_area: [],    //検索中エリア<String>を5つまで格納
    }),
    mounted: function(){
        this.keyword = this.$store.getters['search/getKeyword']
        this.prefecture = this.$store.getters['search/getPrefecture']
        this.large_area = this.$store.getters['search/getLargeArea']
        this.middle_area = this.$store.getters['search/getMiddleArea']
    },
    methods:{
        //キーワード設定(String型) / vuex更新 / 検索クエリ更新
        setKeyword : function(keyword: string): void {
            this.$store.commit('search/updateKeyword', keyword) //vuex更新
            this.createQuery() //クエリ更新
        },
        /*
            クエリ作成メソッド(値を変更する度に呼び出される)
            都度query_baseの初期値を元に再生成される
        */
        createQuery : function(): void {
            this.query = this.query_base //クエリ初期化
            if(this.keyword){
                this.query = this.query + '&keyword=' + this.keyword
            }
            if(this.large_area){
                this.query = this.query + '&large_area=' + this.large_area
            }
            if(this.middle_area.length > 0){
                for(const area of this.middle_area){
                    this.query = this.query + '&middle_area=' + area
                }
            }
        }
    }
})
</script>

<style scoped>
.step{
        font-size: 1.0rem;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
</style>