import { ActionTree } from 'vuex';
import { SearchParams, RootState } from '../types';

const actions: ActionTree<SearchParams, RootState> = {
    //ここにactions関数を作成
    //アロー関数例

    //検索API利用
    searchAsync: async({commit}, query:string) => {

    }
}

export default actions