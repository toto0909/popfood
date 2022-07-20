<template>
    <!--SP版-->
    <div v-if="$vuetify.breakpoint.xs">
        <v-container>
            <div style="margin-top: 0.5rem;">
                <v-row class="text-center">
                    <!--検索条件設定シート開閉ボタン = 押すと設定ダイアログが表示される-->
                    <v-col cols="5">
                        <div>
                            <v-dialog
                            v-model="dialog"
                            fullscreen
                            hide-overlay
                            transition="dialog-bottom-transition"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <!--開閉ボタン-->
                                    <v-btn v-bind="attrs" v-on="on" rounded block outlined color=#888888 style="text-transform: none; font-size: 0.7rem; font-weight: 500;" class="text-center">
                                        <span>検索条件を設定　</span>
                                        <span><v-icon style="font-size: 1.0rem;">mdi-magnify-plus-outline</v-icon></span>
                                    </v-btn>
                                </template>
                                <!--ダイアログ中身 開閉部分のみ(内容は別ファイル)-->
                                <v-card>
                                    <v-toolbar flat color=#FFFFFF>
                                        <v-btn icon @click="dialog = false">
                                            <v-icon style="color: #888888;">mdi-close-circle-outline</v-icon>
                                        </v-btn>
                                        <v-toolbar-title style="font-size: 1.0rem; color: #888888;">検索条件を設定</v-toolbar-title>
                                    </v-toolbar>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-col>

                    <!--位置情報取得ボタン-->
                    <v-col cols="5">
                        <div class="">
                            <v-btn rounded block color=#afd147 style="text-transform: none; font-size: 0.7rem; font-weight: 500; color: #FFFFFF" class="text-center">
                                <span>位置情報を利用　</span>
                                <span><v-icon style="font-size: 1.0rem;">mdi-map-marker-outline</v-icon></span>
                            </v-btn>
                        </div>
                    </v-col>

                    <!--オプションメニュー-->
                    <v-col cols="2">
                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>

    <!--PC版-->
    <div v-else>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchHeader',
    data: () => ({
        dialog: false
    })
})
</script>

<style scoped>
.option-button{
    font-size: 0.7rem;
}
</style>