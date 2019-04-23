import axios from "axios";
import mockjs from "@/api/mock.js";

// 配置全局根域名
axios.defaults.baseURL = 'http://www.cy'

// 首页列表请求
export const indexList = () => {
	return axios.get("/indexList");
}

// 崇阳印象顶部列表请求
export const ImpressionList = () => {
	return axios.get("/ImpressionList");
}

// 县城风貌右侧列表请求
export const countySceneryRight = () => {
	return axios.get("/countySceneryRight");
}

// 美食详情列表请求
export const FoodsList = () => {
	return axios.get("/FoodsList");
}

// 历史名人列表请求
export const HistoryCelebrityList = () => {
	return axios.get("/HistoryCelebrityList");
}

// 畅游重阳顶部列表请求
 export const SecondIndexList = () => {
	return axios.get("/SecondIndexList");
 }
 
// 主要景气列表请求
export const mainScenicSpotsList = () => {
	return axios.get("/mainScenicSpotsList");
}
// 景区详细子景观数据
export const sonSceneryList = () => {
	return axios.get("/sonSceneryList");
}

// 路线攻略列表页
export const routeStrategyList = () => {
	return axios.get("/routeStrategyList");
}

// 路线详情请求
export const routerList = () => {
	return axios.get("/routerList");
}

// 路线详情轮播图数据请求
export const routrInfoSliderList = () => {
	return axios.get("/routrInfoSliderList");
}

// 玩转崇阳顶部列表
export const howToPlayList = () => {
	return axios.get("/howToPlayList");
}

// 崇阳导览列表请求
export const NavigationList = () => {
	return axios.get("/NavigationList");
}

// 崇阳导览列表请求2
export const NavigationList2 = () => {
	return axios.get("/NavigationList2");
}

// 地图右侧数据
export const NavigationRight = () => {
	return axios.get("/NavigationRight");
}

// 美食详情缩略图页面数据
export const imgExhibitionList = () => {
	return axios.get("/imgExhibitionList");
}