<template>
    <div>
        <search-header />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchHeader from '@/components/searchComponents/SearchHeader.vue'


export default Vue.extend({
    name: 'searchTop',
    components: { SearchHeader },
})
</script>
