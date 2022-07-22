<template>
    <div>
        <search-header />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchHeader from '@/components/searchComponents/SearchHeader.vue'
import { hotpepper } from '@/plugins/api' //検索APIエンドポイント

export default Vue.extend({
    name: 'searchTop',
    components: { SearchHeader },
    data: () => ({
        large_area: '',  //都道府県コード
        middle_area: [] as string[], //地域コード
        genre: [] as string[],
        query: '',
    }),
    created: function(){
        //初期クエリ作成(都道府県/地域のみ) => data() => queryに格納 => vuex更新
        this.genre = this.$store.getters['search/getGenre']
        this.large_area = this.$store.getters['search/getLargeArea']
        this.middle_area = this.$store.getters['search/getMiddleArea']
        this.query = hotpepper + '&large_area=' + this.large_area
        for(const area of this.middle_area){
            this.query = this.query + '&middle_area=' + area
        }
        this.$store.commit('search/updateQuery', this.query)
    },
})
</script>
