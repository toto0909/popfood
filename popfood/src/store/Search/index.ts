import { Module } from "vuex";
import { SearchParams, RootState } from "../types";
import getters from './getters';
import mutations from './mutations';
import actions from './actions'

//stateの初期化
const state: SearchParams = {
    prefecture: "",
    large_area: "",
    middle_area: ""
}

export const search: Module<SearchParams, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};