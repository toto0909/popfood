/*
    型のインターフェース定義
*/

export interface RootState {
    version: string;
}

export interface SearchParams {
    prefecture : string;   //検索都道府県名称
    large_area : string;   //検索大エリアコード (例 Z011=東京)
    middle_area : string[];  //検索中エリアコード **5つまで** (例 Y030=渋谷)
    lat : number;          //検索経度
    lan : number;          //検索緯度
    range : number;        //検索範囲 (1: 300m 2: 500m 3: 1000m (初期値) 4: 2000m 5: 3000m)
    keyword : string;      //検索キーワード
    genre : string;        //店舗ジャンル
    free_drink : boolean;  //飲み放題あり(1:絞り込みあり)
    free_food : boolean;   //食べ放題あり(1:絞り込みあり)
    private_room : boolean;//個室あり(1:絞り込みあり)
    parking : boolean;     //駐車場あり(1:絞り込みあり)
    card : boolean;        //カード利用可能(1:絞り込みあり)
    charter : boolean;     //貸切利用可能(1:絞り込みあり)
    midnight : boolean;    //23時以降営業(1:絞り込みあり)
    child : boolean;       //子連れ可能(1:絞り込みあり)
    pet : boolean;         //ペット可能(1:絞り込みあり)
}