import { Module } from "vuex";
import { SearchParams, RootState } from "../types";
import getters from './getters';
import mutations from './mutations';
import actions from './actions'

//state<SearchParams>の初期化
const state: SearchParams = {
    prefecture: "東京",
    large_area: "Z011", //サンプル 東京
    middle_area: ["Y005","Y030"], //サンプル 銀座, 渋谷
    lat: 0,
    lan: 0,
    range: 3,
    keyword: "",
    genre: [],
    free_drink: false,
    free_food: false,
    private_room: false,
    parking: false,
    card: false,
    charter: false,
    midnight: false,
    child: false,
    pet: false,
    query: ""
}

export const search: Module<SearchParams, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};