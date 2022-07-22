<template>
    <div>
        <v-container fluid class="text-center">
            <!-- 位置情報未取得の場合-->
            <div style="padding-top: 3rem;">
                <p>位置情報を取得して下さい</p>
            </div>
            <!-- 位置情報取得ずみの場合-->
            <div>
                
            </div>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchResultMap'
})
</script>

<style scoped>
</style>