<template>
    <div>
        <p>条件検索</p>
        <p>{{getQuery}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchResultDrinkFree',
    components: {

    },
    data: () => ({
    }),
    methods: {
        /*
            クエリをもとに検索するメソッド
        */
    },
    mounted: function(){
        console.log('テスト')
    },
    computed: {
        // vuexから最新のクエリを取得
        // 強制的に"飲み放題あり : free_drink = 1"にして返す
        getQuery: function(): string {
            let query_drink_free: string = this.$store.getters['search/getQuery']
            if(!query_drink_free.includes('&free_drink')){
                query_drink_free = query_drink_free + '&free_drink=1'
            }
            return query_drink_free
        }
    },
    watch: {
        // vuexのクエリの変更を検知
        getQuery() {
            this.$nextTick(() => {
            })
        }
    }
})
</script>