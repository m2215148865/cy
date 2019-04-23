import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



import { FoodsList } from "@/api/http.js";
import { http } from "@/api/http.js";
import { routeStrategy } from "@/dataOperation.js"; // 路线攻略数据解析
import { howToPlayContent } from "@/dataOperation.js"; // 酒店、餐厅、娱乐、购物数据解析


import dataAnalysis from "@/dataOperation/dataAnalysis"; // 数据解析函数


const labelFor = (value,target) => {
	value.forEach((item,index) => {
		let object = {}
		object.name = item;
		if(item == "5A" || item == "4A" || item == "5星"){
			object.state = 0;
		}else{
			object.state = 1;
		}
		target.push(object);
	});
}
export default new Vuex.Store({
	state: {
		ImpressionInfo: { // 崇阳印象
			FoodsList: [], // 美食特产列表
			ImpressionInfoInfo: [], // 崇阳印象详情
			HistoryCelebrityList: [], // 历史名人列表
			cultureSymbolList: [] // 文化符号列表
		},
		SecondIndex: { // 畅游崇阳
			mainScenicSpotsList: [], // 主要景区列表
			scenicInfo: [], // 景区详情
			beautifulRuralList: [], // 美丽乡村列表
			beautifulRuralInfo: [], // 美丽乡村详情
			routeStrategyList: [], // 路线攻略列表
			routrInfo: [] // 路线详情
		},
		howToPlay: {
			howToPlayContentList: [], // 酒店列表
			howToPlayContentInfo: [], // 酒店详情
			restaurantList: [], // 餐厅列表
			restaurantInfo: [], // 餐厅详情
			room: {}
		},
		vtourArr: [],
		activedPanoId: "scene_01",
		imgIndex: 0,
		mapflag: 0,
		imgExhibition: { // 图文缩略图
			ImpressionInfo: [], // 崇阳印象
			scenicInfo: [],
			hotelInfo: []
		},
		Navigation: { // 地图数据
			mapLeft: [],
			bottom: [],
			botobj: {
				scenicSpot:[],
				beautifulRuralGps: []
			}
		}
	},
	mutations: {
		// 美食特产列表
		DataFoodsList(state){
			FoodsList().then(res => {
				dataAnalysis.Foods(res.data,state.ImpressionInfo,state.imgExhibition);
			});
		},
		// 历史名人列表
		HistoryCelebrityList(state){
			http("人文列表").then(res => {
				dataAnalysis.HistoryCelebrity(res.data,state.ImpressionInfo,state.imgExhibition);
			});
		},
		// 文化符号列表
		cultureSymbolList(state){
			http("符号列表").then(res => {
				dataAnalysis.cultureSymbol(res.data,state.ImpressionInfo,state.imgExhibition);
			});
		},
		// 主要景区列表
		mainScenicSpotsList(state){
			http("景区列表").then(res => {
				dataAnalysis.mainScenicSpots(res.data,state.SecondIndex,state.imgExhibition,state.Navigation.botobj.scenicSpot);
			});
			
		},
		// 美丽乡村列表
		restaurantList(state){
			http("乡村列表").then(res => {
				dataAnalysis.beautifulRural(res.data,state.SecondIndex,state.imgExhibition,state.Navigation.botobj.beautifulRuralGps);
			});
		},
		// 路线攻略列表
		routeStrategyList(state){
			http("路线列表").then(res => {
				dataAnalysis.routeStrategy(res.data,state.SecondIndex);
			});
		},
		// 酒店列表
		howToPlayContentList(state,name){
			http(name + "列表").then(res => {
				let list = [];
				name == "酒店"? list = state.howToPlay.howToPlayContentList : name == "餐饮"? list = state.howToPlay.restaurantList : [];
				dataAnalysis.howToPlayContent(res.data,state.howToPlay,name,list,state.imgExhibition);
			});
		},
		vtourArr(state,data){
			state.vtourArr = data;
			console.log('lxg', 'vtourarr');
			console.log('lxg', state.vtourArr);
		},
		activePano(state,activedPanoId){
			state.activedPanoId = activedPanoId;
		},
		panorama1Click(state,activedPanoId){
			state.activedPanoId = activedPanoId;
		},
		imgIndex(state,number){
			console.log(number);
			state.imgIndex = number;
		},
		mapflag(state,flag){
			state.mapflag = flag;
		},
		mapLeft(state){
			http("服务列表").then(res => {
				dataAnalysis.Navigation(res.data,state.Navigation);
			});
		}
	},
	actions: {
		DataFoodsList(context){
			context.commit('DataFoodsList');
		},
		HistoryCelebrityList(context){
			context.commit('HistoryCelebrityList');
		},
		cultureSymbolList(context){
			context.commit('cultureSymbolList');
		},
		mainScenicSpotsList(context){
			context.commit('mainScenicSpotsList');
		},
		restaurantList(context){
			context.commit('restaurantList');
		},
		routeStrategyList(context){
			context.commit('routeStrategyList');
		},
		howToPlayContentList(context,name){
			context.commit('howToPlayContentList',name);
		},
		vtourArr(context,data){
			context.commit('vtourArr',data);
		},
		panorama1Click(context,activedPanoId){
			context.commit('panorama1Click',activedPanoId);
		},
		activePano(context,activedPanoId){
			context.commit('activePano',activedPanoId);
		},
		imgIndex(context,number){
			context.commit('imgIndex',number);
		},
		mapflag(context,flag){
			context.commit('mapflag',flag);
		},
		mapLeft(context){
			context.commit('mapLeft');
		}
	},
	getters: {
		FoodsList(state){ // 美食特产列表
			return state.ImpressionInfo.FoodsList;
		},
		ImpressionInfoInfo(state){ // 崇阳印象详情
			return state.ImpressionInfo.ImpressionInfoInfo;
		},
		HistoryCelebrityList(state){ // 历史名人列表
			return state.ImpressionInfo.HistoryCelebrityList;
		},
		cultureSymbolList(state){
			return state.ImpressionInfo.cultureSymbolList;
		},
		mainScenicSpotsList(state){ //主要景区列表
			return state.SecondIndex.mainScenicSpotsList;
		},
		scenicInfo(state){ //景区详情
			return state.SecondIndex.scenicInfo;
		},
		beautifulRuralList(state){
			return state.SecondIndex.beautifulRuralList;
		},
		beautifulRuralInfo(state){
			return state.SecondIndex.beautifulRuralInfo;
		},
		routeStrategyList(state){ //路线攻略列表
			return state.SecondIndex.routeStrategyList;
		},
		routrInfo(state){ //路线详情
			return state.SecondIndex.routrInfo;
		},
		howToPlayContentList(state){ //酒店列表
			return state.howToPlay.howToPlayContentList;
		},
		howToPlayContentInfo(state){ // 酒店详情
			return state.howToPlay.howToPlayContentInfo;
		},
		room(state){
			return state.howToPlay.room;
		},
		restaurantList(state){ // 餐厅列表
			return state.howToPlay.restaurantList;
		},
		restaurantInfo(state){ // 餐厅详情
			return state.howToPlay.restaurantInfo;
		},
		vtourArr(state){ // 全景列表
			return state.vtourArr;
		},
		activedPanoId(state){ // 主要景区切换id
			return state.activedPanoId;
		},
		imgExhibition(state){
			return state.imgExhibition;
		},
		imgIndex(state){
			return state.imgIndex;
		},
		mapflag(state){
			return state.mapflag;
		},
		mapLeft(state){
			return state.Navigation.mapLeft;
		},
		bottom(state){
			return state.Navigation.bottom;
		},
		scenicSpot(state){
			return state.Navigation.botobj.scenicSpot;
		},
		beautifulRuralGps(state){
			return state.Navigation.botobj.beautifulRuralGps;
		}
	}
})