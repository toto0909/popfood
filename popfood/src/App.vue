<template>
  <v-app>
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

export default Vue.extend({
  name: 'App',
  components: {
    NaviSP,
    NaviPC
  },

  data: () => ({
    //
  }),
});
</script>
