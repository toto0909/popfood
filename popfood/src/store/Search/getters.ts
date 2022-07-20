import { GetterTree } from "vuex";
import { SearchParams, RootState } from "../types";

const getters: GetterTree<SearchParams, RootState> = {
    //ここにgetter関数を作成
    //アロー関数例
    getKeyword: (state: SearchParams) => {
        return state.keyword
    },
    getPrefecture: (state: SearchParams) => {
        return state.prefecture
    },
    getLargeArea: (state: SearchParams) => {
        return state.large_area
    },
    getMiddleArea: (state: SearchParams) => {
        return state.middle_area
    }
}

export default getters;