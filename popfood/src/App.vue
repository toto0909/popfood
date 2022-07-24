<template>
  <v-app>
    <Loading />
    <NaviPC />
    <v-main>
      <router-view/>
    </v-main>
    <NaviSP />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import NaviSP from '@/components/naviComponents/naviSP.vue'
import NaviPC from '@/components/naviComponents/naviPC.vue'
import Loading from '@/components/Loading.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NaviSP,
    NaviPC,
    Loading
  },
  data: () => ({
    //
  }),
  mounted: function() {
    // 初回起動時1500msローディングアニメーション表示
    window.onload = ()=>{
      setTimeout(() => this.$store.commit('search/updateLoading', false), 1500)
    }
  }
});
</script>
