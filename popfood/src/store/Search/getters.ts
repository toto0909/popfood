import { GetterTree } from "vuex";
import { SearchParams, RootState } from "../types";

const getters: GetterTree<SearchParams, RootState> = {
    //ここにgetter関数を作成
    //アロー関数例
    getLoading: (state: SearchParams) => {
        return state.loading
    },
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
    },
    getLat: (state: SearchParams) => {
        return state.lat
    },
    getLan: (state: SearchParams) => {
        return state.lan
    },
    getGenre: (state: SearchParams) => {
        return state.genre
    },
    getFreeDrink: (state: SearchParams) => {
        return state.free_drink
    },
    getFreeFood: (state: SearchParams) => {
        return state.free_food
    },
    getPrivateRoom: (state: SearchParams) => {
        return state.private_room
    },
    getParking: (state: SearchParams) => {
        return state.parking
    },
    getCard: (state: SearchParams) => {
        return state.card
    },
    getCharter: (state: SearchParams) => {
        return state.charter
    },
    getMidnight: (state: SearchParams) => {
        return state.midnight
    },
    getChild: (state: SearchParams) => {
        return state.child
    },
    getPet: (state: SearchParams) => {
        return state.pet
    },
    // 検索用の最新クエリー
    getQuery: (state: SearchParams) => {
        return state.query
    },
    // 検索条件設定中
    getSetting: (state: SearchParams) => {
        return state.setting
    }
}

export default getters;