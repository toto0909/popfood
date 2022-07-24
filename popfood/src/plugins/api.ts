// APIエンドポイント一覧
export const vue_page: string = 'https://jp.vuejs.org/index.html' //vue.js

const API_KEY: string = '7d61dded002340bd' //ホットペッパーAPIキー
export const hotpepper_url: string = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/' //ホットペッパーグルメAPI
export const hotpepper: string = hotpepper_url + '?key=' + API_KEY //ホットペッパー検索用エンドポイント

const API_KEY_G: string = 'AIzaSyAvOT1PDE95I9dtyfgfbsW3Zf-AYk-sVmo' //GoogleMapAPIキー
export const google_map_url: string = 'https://maps.googleapis.com/maps/api/js'
export const google_map: string = google_map_url + '?key=' + API_KEY_G //GoogleMap検索用エンドポイント