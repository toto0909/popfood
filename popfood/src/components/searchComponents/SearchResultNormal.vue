<template>
    <div>
        <p>条件検索</p>
        <p>{{getQuery}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchResultNomal',
    components: {

    },
    data: () => ({
    }),
    methods: {
        /*
            クエリをもとに検索するメソッド
        */
    },
    computed: {
        // vuexから最新のクエリを取得
        getQuery: function(): string {
            return this.$store.getters['search/getQuery']
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