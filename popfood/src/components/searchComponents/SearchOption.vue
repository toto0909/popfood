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
            <div style="padding: 1rem;">
                <p style="font-size: 1rem; margin-bottom: 0; color: #888888">ジャンル</p>
                <p v-if="genre.length<2" style="font-size:0.4rem; margin-bottom: 0;" >{{genre.length}}/2個選択中</p>
                <p v-else style="font-size:0.4rem; margin-bottom: 0; color: #FF0000;" >選択できるジャンルは2個までです</p>
            </div>
            <ul class="horizontal-list" style="padding-left: 1rem;">
                <li class="item" @click="setGenre('G001')">
                    <v-img src="@/assets/genre/izakaya.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G001')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;">居酒屋</p>
                </li>
                <li class="item" @click="setGenre('G002')">
                    <v-img src="@/assets/genre/dining.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G002')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >ダイニングバー・バル</p>
                </li>
                <li class="item" @click="setGenre('G003')">
                    <v-img src="@/assets/genre/sosaku.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G003')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >創作料理</p>
                </li>
                <li class="item" @click="setGenre('G004')">
                    <v-img src="@/assets/genre/wasyoku.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G004')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >和食</p>
                </li>
                <li class="item" @click="setGenre('G005')">
                    <v-img src="@/assets/genre/yosyoku.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G005')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >洋食</p>
                </li>
                <li class="item" @click="setGenre('G006')">
                    <v-img src="@/assets/genre/italian.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G006')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >イタリアン・フレンチ</p>
                </li>
                <li class="item" @click="setGenre('G007')">
                    <v-img src="@/assets/genre/chinese.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G007')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >中華料理</p>
                </li>
                <li class="item" @click="setGenre('G008')">
                    <v-img src="@/assets/genre/yakiniku.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G008')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >焼肉・ホルモン</p>
                </li>
                <li class="item" @click="setGenre('G017')">
                    <v-img src="@/assets/genre/korea.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G017')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >韓国料理</p>
                </li>
                <li class="item" @click="setGenre('G009')">
                    <v-img src="@/assets/genre/ethnic.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G009')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >アジア・エスニック料理</p>
                </li>
                <li class="item" @click="setGenre('G010')">
                    <v-img src="@/assets/genre/forein.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G010')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >各国料理</p>
                </li>
                <li class="item" @click="setGenre('G011')">
                    <v-img src="@/assets/genre/party.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G011')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >パーティ・カラオケ</p>
                </li>
                <li class="item" @click="setGenre('G012')">
                    <v-img src="@/assets/genre/bar.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G012')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >バー・カクテル</p>
                </li>
                <li class="item" @click="setGenre('G013')">
                    <v-img src="@/assets/genre/ramen.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G013')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >ラーメン</p>
                </li>
                <li class="item" @click="setGenre('G016')">
                    <v-img src="@/assets/genre/okonomi.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G016')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >お好み焼き・もんじゃ</p>
                </li>
                <li class="item" @click="setGenre('G014')">
                    <v-img src="@/assets/genre/sweets.jpeg" class="genre_img" aspect-ratio="1" v-bind:class="{'selected': genre.includes('G014')}"></v-img>
                    <p class="ClipFrame" style="font-size:0.4rem; margin-bottom: 0;" >カフェ・スイーツ</p>
                </li>
            </ul>
        </div>

        <!--詳細条件設定-->
        <div class="area">
            <p style="font-size: 1rem; padding: 1rem; margin-bottom: 0; color: #888888">詳細条件</p>
            <div style="margin-left: 1rem;">
                <!--飲み放題あり-->
                <v-checkbox
                    v-model="free_drink"
                    :label="'飲み放題あり'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--食べ放題あり-->
                <v-checkbox
                    v-model="free_food"
                    :label="'食べ放題あり'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--個室あり-->
                <v-checkbox
                    v-model="private_room"
                    :label="'個室あり'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--駐車場あり-->
                <v-checkbox
                    v-model="parking"
                    :label="'駐車場あり'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--カード利用可能-->
                <v-checkbox
                    v-model="card"
                    :label="'カード利用可能'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--貸切利用可能-->
                <v-checkbox
                    v-model="charter"
                    :label="'貸切利用可能'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--23時以降利用可能-->
                <v-checkbox
                    v-model="midnight"
                    :label="'23時以降営業'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--お子様連れOK-->
                <v-checkbox
                    v-model="child"
                    :label="'お子様連れOK'"
                    color=#afd147
                    style="margin-top: 0;"
                ></v-checkbox>
                <!--ペット可-->
                <v-checkbox
                    v-model="pet"
                    :label="'ペット可'"
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
    computed:{
        /*
            条件設定中フラグ(state = setting: bool)を取得する
            この画面が開かれている間は必ずtrueになるはず
            下のwatchでfalseになる瞬間(設定画面が閉じる瞬間)にvuexとの同期をまとめて行う
         */
        getSettingState: function(): boolean {
            return this.$store.getters['search/getSetting']
        }
    },
    watch:{
        //state = setting: boolの変更を監視 => falseになる瞬間(設定画面が閉じる瞬間)にvuexとの同期をまとめて行う
        getSettingState(){
            this.$store.commit('search/updateKeyword', this.keyword)
            this.$store.commit('search/updateFreeDrink', this.free_drink)
            this.$store.commit('search/updateFreeFood', this.free_food)
            this.$store.commit('search/updatePrivateRoom', this.private_room)
            this.$store.commit('search/updateParking', this.parking)
            this.$store.commit('search/updateCard', this.card)
            this.$store.commit('search/updateCharter', this.charter)
            this.$store.commit('search/updateMidnight', this.midnight)
            this.$store.commit('search/updateChild', this.child)
            this.$store.commit('search/updatePet', this.pet)
            this.createQuery()
            this.commitQuery()
        }
    },
    methods:{
        /*
            クエリ作成メソッド
            条件設定画面を閉じた時にgetSettingState()で呼び出される
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
            if(this.genre.length > 0){
                for(const gen of this.genre){
                    this.query = this.query + '&genre=' + gen
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
        },

        /*
            条件設定画面を閉じた時にgetSettingState()で呼び出され、vuex(mutation)に新クエリをcommitする
        */
        commitQuery : function() : void {
            this.$store.commit('search/updateQuery', this.query)
        },

        // ジャンル設定
        setGenre : function(genge_code: string): void {
            if(this.genre.includes(genge_code)){
                //要素削除 ほんとはfilter使って1行でやりたいが...なぜかできない
                //this.genre = this.genre.filter(function(x){return x != genge_code})
                for (let i = 0; i < this.genre.length; i++) {
                    if(this.genre[i]===genge_code){
                        this.genre.splice(i, 1)
                    }
                }
            }else{
                //2個まで追加可能
                if(this.genre.length>=2){
                    return
                }else{
                    this.genre.push(genge_code) //要素追加
                }
            }
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
/* 横スクロール用-- */
.horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: auto;
    scrollbar-color: transparent transparent;
    }
.horizontal-list::-webkit-scrollbar {
    height: 0px;
    display: none;
}
.horizontal-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
}
.horizontal-list::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
    -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
}
.horizontal-list::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0, 0, 0, 0);
}
.item {
    display: inline-block;
    margin: 5px;
    width: 4rem;
}
.genre_img{
    border: solid 0.5px #888888;
    background: transparent;
}
.selected {
    border: solid 3px #FF0000;
    background: transparent;
}
/* --横スクロール用 */

/* 文字のはみ出し防止 */
.ClipFrame {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    -webkit-text-overflow: clip; /*Safari用*/
    -o-text-overflow: clip; /*Opera用*/
}
</style>