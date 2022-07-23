<template>
    <!--SP版-->
    <div v-if="$vuetify.breakpoint.xs">
        <!--位置情報取得中ローディングアニメーション-->
        <Loading />
        <v-container fluid>
            <div style="margin-top: 0.5rem;">
                <v-row class="text-center">
                    <!--検索条件設定シート開閉ボタン = 押すと設定ダイアログが表示される-->
                    <v-col cols="5" style="padding-bottom: 0.5rem;">
                        <div>
                            <v-dialog
                            v-model="dialog"
                            fullscreen
                            hide-overlay
                            transition="dialog-bottom-transition"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <!--開閉ボタン-->
                                    <v-btn v-bind="attrs" v-on="on" rounded block outlined color=#888888 style="text-transform: none; font-size: 0.7rem; font-weight: 500;" class="text-center"
                                        @click="setSettingStateTrue()">
                                        <span>検索条件を設定　</span>
                                        <span><v-icon style="font-size: 1.0rem;">mdi-magnify-plus-outline</v-icon></span>
                                    </v-btn>
                                </template>
                                <!--ダイアログ中身 開閉部分のみ(内容は別ファイル)-->
                                <v-card>
                                    <v-toolbar flat color=#FFFFFF>
                                        <v-btn icon @click="dialog = false, setSettingStateFalse()"> <!--TODO ここ閉じたら再検索-->
                                            <v-icon style="color: #888888;">mdi-close-circle-outline</v-icon>
                                        </v-btn>
                                        <v-toolbar-title style="font-size: 1.0rem; color: #888888;">検索条件を設定</v-toolbar-title>
                                    </v-toolbar>
                                    <!--ダイアログ >>SearchOption.vue-->
                                    <SearchOption />
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-col>

                    <!--位置情報取得ボタン 位置情報が無い時活性化-->
                    <v-col cols="5" style="padding-bottom: 0.5rem;">
                        <div v-if="lat <= 0 && lan <= 0">
                            <v-btn @click="getLocation()" rounded block color=#afd147 style="text-transform: none; font-size: 0.7rem; font-weight: 500; color: #FFFFFF" class="text-center">
                                <span>位置情報を利用　</span>
                                <span><v-icon style="font-size: 1.0rem;">mdi-map-marker-outline</v-icon></span>
                            </v-btn>
                        </div>
                        <div v-else>
                            <v-btn rounded block disabled style="text-transform: none; font-size: 0.7rem; font-weight: 500;" class="text-center">
                                <span>位置情報取得済み　</span>
                                <span><v-icon style="font-size: 1.0rem;">mdi-map-marker-outline</v-icon></span>
                            </v-btn>
                        </div>
                    </v-col>

                    <!--オプションメニュー-->
                    <v-col cols="2" style="padding-bottom: 0.5rem;">
                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <!--設定項目の表示 ※※※ watchして常時更新 ※※※ -->
        <v-container v-if="options.length > 0" style="padding:0;">
            <ul class="horizontal-list" style="padding-left: 1rem;">
                <li v-for="option in options" :key="option" class="item">
                    <v-sheet
                    class="text-center"
                    style="font-size: 0.8rem;"
                    color="white"
                    elevation="2"
                    height=1rem;
                    rounded
                    >
                        <p style="color:#888888; margin-bottom:0; padding-left: 1rem; padding-right: 1rem; padding-top: 0.3rem; padding-bottom: 0.3rem;">
                            {{option}}
                        </p>
                    </v-sheet>
                </li>
            </ul>
        </v-container>

        <!--メニュータブ-->
        <v-container style="padding-top:0; padding-left:0; padding-right:0;">
            <SearchMenu />
        </v-container>
    </div>

    <!--PC版-->
    <div v-else>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchOption from '@/components/searchComponents/SearchOption.vue'
import SearchMenu from '@/components/searchComponents/SearchMenu.vue'
import Loading from '@/components/Loading.vue'

export default Vue.extend({
    name: 'SearchHeader',
    components: {
        SearchOption,
        SearchMenu,
        Loading
    },
    data: () => ({
        dialog: false,
        setting: false,          //オプション設定画面を開いているかのフラグ
        options: [] as string[], //オプション選択された内容(文字列配列)
        lat: 0,   //緯度
        lan: 0,   //経度
    }),
    mounted: function(){
        this.lat = this.$store.getters['search/getLat'] //vuexから緯度取得
        this.lan = this.$store.getters['search/getLan'] //vuexから経度取得
    },
    methods: {
        /*
            メモ
            検索条件の文字列配列を生成するメソッド
            data() => options[]に格納する
            ※watchを使ってvuex/stateに更新が入る度に起動
            ※正確にはcomputedでこのmethod(createOptionTabs)を起動させるが、そのcomuputedをwatchで監視する。結果的にvuexのstateを監視できる？
            ※各条件(項目)をvuex/gettersから取得して該当項目がある場合に配列に格納する
        */
        createOptionTabs : function() : void {
            this.options = [] //初期化
            //都道府県
            if(this.$store.getters['search/getPrefecture']){
                this.options.push(this.$store.getters['search/getPrefecture'])
            }
            //地域(TODO コードから地名に変換して格納 文字数は最大10とする)
            if(this.$store.getters['search/getMiddleArea'].length > 0){
                //TODO
            }
            //ジャンル
            if(this.$store.getters['search/getGenre'].length > 0){
                //ジャンルコードをジャンル名称に変換して追加
                if (this.$store.getters['search/getGenre'].includes('G001')) this.options.push('居酒屋');
                if (this.$store.getters['search/getGenre'].includes('G002')) this.options.push('ダイニングバー');
                if (this.$store.getters['search/getGenre'].includes('G003')) this.options.push('創作料理');
                if (this.$store.getters['search/getGenre'].includes('G004')) this.options.push('和食');
                if (this.$store.getters['search/getGenre'].includes('G005')) this.options.push('洋食');
                if (this.$store.getters['search/getGenre'].includes('G006')) this.options.push('イタリアン・フレンチ');
                if (this.$store.getters['search/getGenre'].includes('G007')) this.options.push('中華料理');
                if (this.$store.getters['search/getGenre'].includes('G008')) this.options.push('焼肉・ホルモン');
                if (this.$store.getters['search/getGenre'].includes('G017')) this.options.push('韓国料理');
                if (this.$store.getters['search/getGenre'].includes('G009')) this.options.push('アジア・エスニック料理');
                if (this.$store.getters['search/getGenre'].includes('G010')) this.options.push('各国料理');
                if (this.$store.getters['search/getGenre'].includes('G011')) this.options.push('パーティ・カラオケ');
                if (this.$store.getters['search/getGenre'].includes('G012')) this.options.push('バー・カクテル');
                if (this.$store.getters['search/getGenre'].includes('G013')) this.options.push('ラーメン');
                if (this.$store.getters['search/getGenre'].includes('G016')) this.options.push('お好み焼き・もんじゃ');
                if (this.$store.getters['search/getGenre'].includes('G014')) this.options.push('カフェ・スイーツ');
            }
            //キーワード
            if(this.$store.getters['search/getKeyword']) {
                this.options.push(this.$store.getters['search/getKeyword'])
            }
            //飲み放題
            if(this.$store.getters['search/getFreeDrink']) {
                this.options.push('飲み放題')
            }
            //食べ放題
            if(this.$store.getters['search/getFreeFood']) {
                this.options.push('食べ放題')
            }
            //個室
            if(this.$store.getters['search/getPrivateRoom']) {
                this.options.push('個室あり')
            }
            //駐車場
            if(this.$store.getters['search/getParking']) {
                this.options.push('駐車場あり')
            }
            //カード
            if(this.$store.getters['search/getCard']) {
                this.options.push('カード可能')
            }
            //貸切
            if(this.$store.getters['search/getCharter']) {
                this.options.push('貸し切り')
            }
            //23時以降
            if(this.$store.getters['search/getMidnight']) {
                this.options.push('23時以降営業')
            }
            //子連れ
            if(this.$store.getters['search/getChild']) {
                this.options.push('お子様連れOK')
            }
            //ペット
            if(this.$store.getters['search/getPet']) {
                this.options.push('ペットOK')
            }
        },
        //詳細条件設定画面ON/OFFフラグ
        setSettingStateTrue: function(): void {
            this.$store.commit('search/updateSetting', true)
        },
        setSettingStateFalse: function(): void {
            this.$store.commit('search/updateSetting', false)
        },

        /*
            位置情報取得メソッド
            非同期 + 位置情報取得中はアニメーションで画面封鎖(取得成功/失敗後に解除)
            取得後はvuexの緯度・経度を更新する
            値 : 0...未取得 正...正常取得済み 負...取得失敗
        */
        getLocation: function(): void {
            this.$store.commit('search/updateLoading', true) //vuex => ローディングアニメーションON
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    //成功時のコールバック関数
                    this.lat = position.coords.latitude;  //緯度
                    this.lan = position.coords.longitude; //経度
                    this.$store.commit('search/updateLat', position.coords.latitude);
                    this.$store.commit('search/updateLan', position.coords.longitude);
                    this.$store.commit('search/updateLoading', false) //vuex => ローディングアニメーションOFF
                },
                (error) => {
                    //失敗時のコールバック関数 失敗時は負の値を格納する
                    this.lat = -1;  //緯度
                    this.lan = -1; //経度
                    this.$store.commit('search/updateLat', -1);
                    this.$store.commit('search/updateLan', -1);
                    this.$store.commit('search/updateLoading', false)
                    window.alert('エラー | 位置情報の取得に失敗しました。' + error);
                },
            )
        },
    },
    computed : {
        // options[]を取得
        searchState: function(): string[] {
            this.createOptionTabs()
            return this.options
        },
        // setting(条件設定画面が開かれているか)フラグを取得
        getSettingState: function(): boolean {
            return this.$store.getters['search/getSetting'] //条件設定中フラグ取得
        }
    },
    watch : {
        // computedのsearchStateを監視、vuexの条件更新を監視する => 更新があった場合条件一覧タブを再描画
        searchState() {
            this.$nextTick(() => {
            })
        },
        // computedのgetSettingStateを監視
        getSettingState(){
            this.$nextTick(() => {
            })
        }
    }
})
</script>

<style scoped>
.option-button{
    font-size: 0.7rem;
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
    background: transparent;
}
/* --横スクロール用 */
</style>