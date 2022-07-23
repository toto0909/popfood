import { MutationTree } from 'vuex';
import { SearchParams } from '../types';

const mutations: MutationTree<SearchParams> = {
    //ここにmutations関数を作成
    //アロー関数例
    updateLoading: (state:SearchParams, value: boolean) => {
        state.loading = value
    },
    updateKeyword: (state:SearchParams, value: string) => {
        state.keyword = value
    },
    updatePrefecture: (state:SearchParams, value: string) => {
        state.prefecture = value
    },
    updateLargeArea: (state:SearchParams, value: string) => {
        state.large_area = value
    },
    //検索中エリアを1つ追加
    addMiddleArea: (state:SearchParams, value: string) => {
        state.middle_area.push(value)
    },
    //検索中エリアを1つ削除
    updateGenre: (state:SearchParams, value: string[]) => {
        state.genre = value
    },

    //位置情報・検索半径
    updateLat: (state:SearchParams, value: number) => {
        state.lat = value
    },
    updateLan: (state:SearchParams, value: number) => {
        state.lan = value
    },
    updateRange: (state:SearchParams, value: number) => {
        state.range = value
    },

    updateFreeDrink: (state:SearchParams, value: boolean) => {
        state.free_drink = value
    },
    updateFreeFood: (state:SearchParams, value: boolean) => {
        state.free_food = value
    },
    updatePrivateRoom: (state:SearchParams, value: boolean) => {
        state.private_room = value
    },
    updateParking: (state:SearchParams, value: boolean) => {
        state.parking = value
    },
    updateCard: (state:SearchParams, value: boolean) => {
        state.card = value
    },
    updateCharter: (state:SearchParams, value: boolean) => {
        state.charter = value
    },
    updateMidnight: (state:SearchParams, value: boolean) => {
        state.midnight = value
    },
    updateChild: (state:SearchParams, value: boolean) => {
        state.child = value
    },
    updatePet: (state:SearchParams, value: boolean) => {
        state.pet = value
    },
    // 検索用クエリを更新する時に呼び出す(固定条件検索では呼び出さない)
    updateQuery: (state:SearchParams, value: string) => {
        state.query = value
    },
    // 条件設定中のフラグ更新
    updateSetting: (state:SearchParams, value: boolean) => {
        state.setting = value
    },
}

export default mutations