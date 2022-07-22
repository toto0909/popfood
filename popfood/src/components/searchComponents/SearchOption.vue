<template>
    <div id="option">
        <!--地理関係-->
        <div class="area">
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

            <!--都道府県選択-->
            <div class="step" style="padding-top: 0">
                <v-select
                    v-model="large_area"
                    :items="PREFECTURE_NAME_ARRAY"
                    :menu-props="{ top: true, offsetY: true }"
                    label="都道府県"
                ></v-select>
            </div>
        </div>

        <!--ジャンル設定-->
        <div class="area">
            <p style="font-size: 1rem; padding: 1rem; margin-bottom: 0; color: #888888">ジャンル</p>
        </div>

        <!--条件設定-->
        <div class="area">
            <p style="font-size: 1rem; padding: 1rem; margin-bottom: 0; color: #888888">詳細条件</p>
            <div style="margin-left: 1rem;">
                <!--飲み放題あり-->
                <v-checkbox
                    v-model="free_drink"
                    :label="'飲み放題あり'"
                    @change="setFreeDrink(free_drink)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--食べ放題あり-->
                <v-checkbox
                    v-model="free_food"
                    :label="'食べ放題あり'"
                    @change="setFreeFood(free_food)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--個室あり-->
                <v-checkbox
                    v-model="private_room"
                    :label="'個室あり'"
                    @change="setPrivateRoom(private_room)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--駐車場あり-->
                <v-checkbox
                    v-model="parking"
                    :label="'駐車場あり'"
                    @change="setParking(parking)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--カード利用可能-->
                <v-checkbox
                    v-model="card"
                    :label="'カード利用可能'"
                    @change="setCard(card)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--貸切利用可能-->
                <v-checkbox
                    v-model="charter"
                    :label="'貸切利用可能'"
                    @change="setCharter(charter)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--23時以降利用可能-->
                <v-checkbox
                    v-model="midnight"
                    :label="'23時以降営業'"
                    @change="setMidnight(midnight)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--お子様連れOK-->
                <v-checkbox
                    v-model="child"
                    :label="'お子様連れOK'"
                    @change="setChild(child)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--ペット可-->
                <v-checkbox
                    v-model="pet"
                    :label="'ペット可'"
                    @change="setPet(pet)"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { hotpepper } from '@/plugins/api' //検索APIエンドポイント呼び出し
import AREA from '@/assets/area.json'     //都道府県・地域データ(JSON)のインポート(実戦ではAPIから)

export default Vue.extend({
    name: 'SearchOption',
    data: () => ({
        AREA : AREA,
        //PREFECTURE_ARRAY : [] as Array<Array<string>>,//検索候補の都道府県コード/名称配列(文字列)
        PREFECTURE_CODE_ARRAY : [] as string[],      //検索候補の都道府県コード配列(文字列)
        PREFECTURE_NAME_ARRAY : [] as string[],      //検索候補の都道府県名配列(文字列)
        AREA_CODE_ARRAY : [] as string[],      //検索候補の地域コード配列(文字列)
        AREA_NAME_ARRAY : [] as string[],      //検索候補の地域名配列(文字列)
        query_base: hotpepper, //検索URL&Query初期値
        query: hotpepper,      //検索URL&Query格納用
        prefecture: "",
        keyword: "",
        large_area: "",
        middle_area: [],       //検索中エリアコード<String>を5つまで格納
        genre: [] as string[], //ジャンル
        free_drink: false,     //飲み放題
        free_food: false,      //食べ放題
        private_room: false,   //個室
        parking: false,        //駐車場
        card: false,           //カード利用
        charter: false,        //貸切
        midnight: false,       //23時以降営業
        child: false,          //お子様連れOK
        pet: false,            //ペット可
    }),
    mounted: function(){
        this.setPrefectureArray() //都道府県配列生成
        this.keyword = this.$store.getters['search/getKeyword']
        this.prefecture = this.$store.getters['search/getPrefecture']
        this.large_area = this.$store.getters['search/getLargeArea']
        this.middle_area = this.$store.getters['search/getMiddleArea']
        this.genre = this.$store.getters['search/getGenre']
        this.free_drink = this.$store.getters['search/getFreeDrink']
        this.free_food = this.$store.getters['search/getFreeFood']
        this.private_room = this.$store.getters['search/getPrivateRoom']
        this.parking = this.$store.getters['search/getParking']
        this.card = this.$store.getters['search/getCard']
        this.charter = this.$store.getters['search/getCharter']
        this.midnight = this.$store.getters['search/getMidnight']
        this.child = this.$store.getters['search/getChild']
        this.pet = this.$store.getters['search/getPet']
        this.createQuery() //クエリ更新(初期クエリの生成)
    },
    methods:{
        // キーワード設定(String型) / vuex更新 / 検索クエリ更新
        setKeyword : function(keyword: string): void {
            this.$store.commit('search/updateKeyword', keyword) //vuex更新
            this.createQuery() //クエリ更新
        },
        // 飲み放題設定(bool型) / vuex更新 / 検索クエリ更新
        setFreeDrink : function(drink: boolean): void {
            this.$store.commit('search/updateFreeDrink', drink)
            this.createQuery()
        },
        // 食べ放題設定(bool型) / vuex更新 / 検索クエリ更新
        setFreeFood : function(food: boolean): void {
            this.$store.commit('search/updateFreeFood', food)
            this.createQuery()
        },
        // 個室設定(bool型) / vuex更新 / 検索クエリ更新
        setPrivateRoom : function(room: boolean): void {
            this.$store.commit('search/updatePrivateRoom', room)
            this.createQuery()
        },
        // 駐車場設定(bool型) / vuex更新 / 検索クエリ更新
        setParking : function(parking: boolean): void {
            this.$store.commit('search/updateParking', parking)
            this.createQuery()
        },
        // カード利用設定(bool型) / vuex更新 / 検索クエリ更新
        setCard : function(card: boolean): void {
            this.$store.commit('search/updateCard', card)
            this.createQuery()
        },
        // 貸切利用設定(bool型) / vuex更新 / 検索クエリ更新
        setCharter : function(usable: boolean): void {
            this.$store.commit('search/updateCharter', usable)
            this.createQuery()
        },
        // 23時以降利用設定(bool型) / vuex更新 / 検索クエリ更新
        setMidnight : function(usable: boolean): void {
            this.$store.commit('search/updateMidnight', usable)
            this.createQuery()
        },
        // 子連れ利用設定(bool型) / vuex更新 / 検索クエリ更新
        setChild : function(child: boolean): void {
            this.$store.commit('search/updateChild', child)
            this.createQuery()
        },
        // ペット利用設定(bool型) / vuex更新 / 検索クエリ更新
        setPet : function(pet: boolean): void {
            this.$store.commit('search/updatePet', pet)
            this.createQuery()
        },

        /*
            クエリ作成メソッド(値を変更する度に呼び出される)
            都度query_baseの初期値を元に再生成される
            ※あくまでオプションページ内のdata()を変更するのみ。vuex更新は別メソッド
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
            if(this.free_drink) {
                this.query = this.query + '&free_drink=1'
            }
            if(this.free_food) {
                this.query = this.query + '&free_food=1'
            }
            if(this.private_room) {
                this.query = this.query + '&private_room=1'
            }
            if(this.parking) {
                this.query = this.query + '&parking=1'
            }
            if(this.card) {
                this.query = this.query + '&card=1'
            }
            if(this.charter) {
                this.query = this.query + '&charter=1'
            }
            if(this.midnight) {
                this.query = this.query + '&midnight=1'
            }
            if(this.child) {
                this.query = this.query + '&child=1'
            }
            if(this.pet) {
                this.query = this.query + '&pet=1'
            }
            this.commitQuery()
        },

        /*
            createQuery()で更新されたdata()内のクエリをvuex(mutation)にcommitする
        */
        commitQuery : function() : void {
            this.$store.commit('search/updateQuery', this.query)
        },

        // 都道府県選択時 / vuex更新 / 検索クエリ更新
        setPrefecture : function(code: string): void {
            
        },

        // 地域選択時　/ vuex更新 / 検索クエリ更新
        setArea : function(code: string): void {

        },

        /*
            都道府県一覧配列の生成(読み込み時)
        */
        setPrefectureArray : function(): void {
            //console.log(AREA.KANAGAWA.CITIES.YOKOHAMA.CITY_NAME)
            //this.PREFECTURE_ARRAY.push([AREA.KANAGAWA.CITIES.YOKOHAMA.CITY_CODE, AREA.KANAGAWA.CITIES.YOKOHAMA.CITY_NAME])
            //for in とかで自動で回したい
            //コード
            this.PREFECTURE_CODE_ARRAY.push(AREA.TOKYO.AREA_CODE)
            this.PREFECTURE_CODE_ARRAY.push(AREA.KANAGAWA.AREA_CODE)
            //名称
            this.PREFECTURE_NAME_ARRAY.push(AREA.TOKYO.PREF_NAME)
            this.PREFECTURE_NAME_ARRAY.push(AREA.KANAGAWA.PREF_NAME)
        },

        /*
            地域一覧配列の生成
        */
        setAreaArray : function(): void {
            
        }
    }
})
</script>

<style scoped>
#option{
    background-color: #EEEEEE;
    padding-top: 1rem;
}
.area{
    background-color: #FFFFFF;
    box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, .2);
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;;
}
.step{
        font-size: 1.0rem;
        padding-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
</style>