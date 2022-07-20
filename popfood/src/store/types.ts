/*
    型のインターフェース定義
*/

export interface RootState {
    version: string;
}

export interface SearchParams {
    prefecture : string;   //検索都道府県名称
    large_area : string;   //検索大エリアコード (例 Z011=東京)
    middle_area : string;  //検索中エリアコード (例 Y030=渋谷)
}