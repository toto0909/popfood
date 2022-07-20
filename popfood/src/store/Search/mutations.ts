import { MutationTree } from 'vuex';
import { SearchParams } from '../types';

const mutations: MutationTree<SearchParams> = {
    //ここにmutations関数を作成
    //アロー関数例
    setPrefecture: (state:SearchParams, value: string) => {
        state.prefecture = value
    },
    setLargeArea: (state:SearchParams, value: string) => {
        state.large_area = value
    },
    setMiddleArea: (state:SearchParams, value: string) => {
        state.middle_area = value
    }
}

export default mutations