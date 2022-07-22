<template>
    <!--SP版の検索メニュータブ 通常/周辺検索/ラーメンなどを切り替える-->
    <div>
        <v-card class="rounded-0" style="padding-top: 0rem;" flat>
            <v-tabs v-model="tab" background-color=#FFFFFF color=#AFD147 centered light>
                <v-tabs-slider></v-tabs-slider>

                <!-- タブ見出し① 通常検索 -->
                <v-tab href="#tab-1">
                    <div>
                        <v-icon>mdi-silverware-fork-knife</v-icon>
                        <p style="font-size:0.5rem; margin-bottom: 0;">条件検索</p>
                    </div>
                </v-tab>

                <!-- タブ見出し② 周辺検索 -->
                <v-tab href="#tab-2">
                    <div>
                        <v-icon>mdi-map-marker-outline</v-icon>
                        <p style="font-size:0.5rem; margin-bottom: 0;">周辺検索</p>
                    </div>
                </v-tab>
                
                <!-- タブ見出し③ 飲み放題 -->
                <v-tab href="#tab-3">
                    <div>
                        <v-icon>mdi-glass-mug-variant</v-icon>
                        <p style="font-size:0.5rem; margin-bottom: 0;">飲み放題</p>
                    </div>
                </v-tab>

                <!-- タブ見出し④ ラーメン -->
                <v-tab href="#tab-4">
                    <div>
                        <v-icon>mdi-noodles</v-icon>
                        <p style="font-size:0.5rem; margin-bottom: 0;">ラーメン</p>
                    </div>
                </v-tab>
            </v-tabs>
            <v-divider style="border-width: 0.8px"></v-divider>

            <v-tabs-items v-model="tab">
                <!-- タブ① -->
                <v-tab-item value=tab-1>
                    <v-card flat tile>
                        <SearchResultNormalVue />
                    </v-card>
                </v-tab-item>

                <!-- タブ② -->
                <v-tab-item value=tab-2>
                    <v-card flat tile>
                        <SearchResultMapVue />
                    </v-card>
                </v-tab-item>

                <!-- タブ③ -->
                <v-tab-item value=tab-3>
                    <v-card flat tile>
                        <SearchResultDrinkFreeVue />
                    </v-card>
                </v-tab-item>

                <!-- タブ④ -->
                <v-tab-item value=tab-4>
                    <v-card flat tile>
                        <SearchResultRamenVue />
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchResultNormalVue from './SearchResultNormal.vue'
import SearchResultMapVue from './SearchResultMap.vue'
import SearchResultDrinkFreeVue from './SearchResultDrinkFree.vue'
import SearchResultRamenVue from './SearchResultRamen.vue'

export default Vue.extend({
    name: 'SearchMenu',
    components: {
        SearchResultNormalVue,
        SearchResultMapVue,
        SearchResultDrinkFreeVue,
        SearchResultRamenVue
    },
    data: () => ({
        tab: null,
    })
})
</script>