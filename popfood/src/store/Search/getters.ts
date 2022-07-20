import { GetterTree } from "vuex";
import { SearchParams, RootState } from "../types";

const getters: GetterTree<SearchParams, RootState> = {
    //ここにgetter関数を作成
    //アロー関数例
    getPrefecture: (state: SearchParams) => {
        return state.prefecture
    },
    getLargeArea: (state: SearchParams) => {
        return state.large_area
    }
}

export default getters;