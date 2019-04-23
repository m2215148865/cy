import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 以下为模块
import index from "@/views/index"; // 首页


import Impression from "@/views/Impression"; // 崇阳印象页
	import countyScenery from "@/views/Impression/countyScenery"; // 县城风貌页
	import Foods from "@/views/Impression/Foods"; // 县城风貌页
	import HistoryCelebrity from "@/views/Impression/HistoryCelebrity"; // 历史名人页
	import cultureSymbol from "@/views/Impression/cultureSymbol"; // 文化符号页面
		import ImpressionInfo from "@/views/Info/ImpressionInfo"; // 崇阳印象子页面详情页
		

import SecondIndex from "@/views/SecondIndex"; // 畅游崇阳页
	import mainScenicSpots from "@/views/SecondIndex/mainScenicSpots"; // 主要景气列表页
		import panorama from "@/views/panorama"; // 主要景区
			import panorama1 from "@/views/panorama/panorama1"; // 主要景区1
			import panorama2 from "@/views/panorama/panorama2"; // 主要景区1
				import scenicInfo from "@/views/Info/scenicInfo.vue"; // 景区详情
		import beautifulRural from "@/views/SecondIndex/beautifulRural.vue"; // 美丽乡村页
		import routeStrategy from "@/views/SecondIndex/routeStrategy.vue"; // 路线攻略页
			import routrInfo from "@/views/Info/routrInfo.vue"; // 路线详情页
			
			
import howToPlay from "@/views/howToPlay.vue"; // 玩转崇阳页
	import howToPlayContent from "@/views/howToPlay/howToPlayContent.vue"; // 酒店
	import restaurant from "@/views/howToPlay/restaurant.vue"; // 酒店
	
		import hotelInfo from "@/views/Info/hotelInfo.vue"; // 酒店详情页
		import restaurantInfo from "@/views/Info/restaurantInfo.vue";
	import Trip from "@/views/howToPlay/Trip.vue"; // 出行页


import Navigation from "@/views/Navigation"; // 地图

import imgExhibition from "@/views/imgExhibition"; // 缩略图


export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			redirect: "/index"
		},
		{
			path: "/index",
			component: index
		},
		{
			path: "/Impression",
			redirect: "/Impression/countyScenery",
			component: Impression,
			children: [
				{
					path: "countyScenery",
					component: countyScenery
				},
				{
					path: "Foods",
					component: Foods
				},
				{
					path: "HistoryCelebrity",
					component: HistoryCelebrity
				},
				{
					path: "cultureSymbol",
					component: cultureSymbol
				}
			]
		},
		{
			path: "/ImpressionInfo/:id",
			component: ImpressionInfo
		},
		{
			path: "/SecondIndex",
			redirect: "/SecondIndex/mainScenicSpots",
			component: SecondIndex,
			children: [
				{
					path: "mainScenicSpots",
					component: mainScenicSpots
				},
				{
					path: "beautifulRural",
					component: beautifulRural
				},
				{
					path: "routeStrategy",
					component: routeStrategy
				}
			]
		},
		{
			path: "/panorama/:id",
			redirect: "/panorama/:id/panorama1",
			component: panorama,
			children: [
				{
					path: "panorama1",
					component: panorama1
				},
				{
					path: "panorama2",
					component: panorama2
				}
			]
		},
		{
			path: "/scenicInfo/:id",
			component: scenicInfo
		},
		{
			path: "/routrInfo/:id",
			component: routrInfo
		},
		{
			path: "/howToPlay",
			redirect: "/howToPlay/howToPlayContent",
			component: howToPlay,
			children: [
				{
					path: "howToPlayContent",
					component: howToPlayContent,
				},
				{
					path: "restaurant",
					component: restaurant,
				},
				{
					path: "Trip",
					component: Trip
				}
			]
		},
		{
			path: "/hotelInfo/:id",
			component: hotelInfo
		},
		{
			path: "/restaurantInfo/:id",
			component: restaurantInfo
		},
		{
			path: "/Navigation",
			component: Navigation
		},
		{
			path: "/imgExhibition/:urlName",
			component: imgExhibition
		}
	]
})
