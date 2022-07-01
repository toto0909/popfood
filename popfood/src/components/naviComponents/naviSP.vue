<template>
    <!--SP版フッターナビ-->
    <div id="nav" class="d-sm-none footer">
        <v-divider></v-divider>
        <v-container fluid>
            <v-row class="text-center" style="margin-bottom: 0.6rem;">
                <v-col>
                    <router-link active-class="link-active" exact :to="{name:'search'}">
                        <v-icon>mdi-silverware-fork-knife</v-icon>
                        <p>飲食</p>
                    </router-link>
                </v-col>
                <v-col>
                    <router-link active-class="link-active" exact :to="{name:'weather'}">
                        <v-icon>mdi-white-balance-sunny</v-icon>
                        <p>天気</p>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'naviSP'
})
</script>

<style scoped>
#nav {
    padding: bottom;
    text-decoration:none;
    background-color: #FFFFFF;
}

#nav p {
    font-size: 0.6rem;
    margin-bottom: 0rem;
    text-decoration:none; 
}

#nav a {
    font-size: 0.6rem;
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
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 5;
}
</style>