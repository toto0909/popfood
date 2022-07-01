<template>
    <div>
        <p>天気</p>
        <router-link active-class="link-active" exact :to="{name:'search'}">
            <span>検索</span>
        </router-link>
    </div>
</template>