<template>
    <!--PC版ヘッダーナビ-->
    <div id="nav" class="d-none d-sm-block">
        <v-container fluid>
            <v-row class="text-center">
                <v-col cols="1"></v-col>
                <v-col cols="7" class="text-left">
                    <img src="@/assets/icon.png" width="50px" height="50px">
                </v-col>
                <v-col cols="2" style="margin-top: 1.0rem">
                    <router-link active-class="link-active" exact :to="{name:'search'}">
                        <v-icon>mdi-silverware-fork-knife</v-icon>
                        <span> 飲食</span>
                    </router-link>
                </v-col>
                <v-col cols="2" style="margin-top: 1.0rem">
                    <router-link active-class="link-active" exact :to="{name:'weather'}">
                        <v-icon>mdi-white-balance-sunny</v-icon>
                        <span> 天気</span>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'naviPC'
})
</script>

<style scoped>
#nav {
    padding: bottom;
    text-decoration:none;
    background-color: #FFFFFF;
}

#nav p {
    font-size: 1.0rem;
    margin-bottom: 0rem;
    text-decoration:none; 
}

#nav a {
    font-size: 1.0rem;
    margin-bottom: 0rem;
    color: #888888;
    text-decoration:none; 
}

#nav .link-active .v-icon{
    color: #afd147;
}
#nav .link-active{
    font-weight: bold;
    color: #afd147;
}
</style>