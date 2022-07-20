import { MutationTree } from 'vuex';
import { SearchParams } from '../types';

const mutations: MutationTree<SearchParams> = {
    //ここにmutations関数を作成
    //アロー関数例
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
}

export default mutations