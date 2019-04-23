// 数据解析页面
import dataFunction from "@/dataOperation/dataFunction.js";

// 美食特产列表及详情处理函数
const Foods = (value,target,imgExhibition) => { 
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		console.log(item);
		if(target.FoodsList.length < num){
			let listobj = {}; // 列表
			listobj.id = id++;
			dataFunction.Impression.FoodsListData(item,listobj,target.FoodsList); // 列表处理函数
			let Infoobj = {}; // 详情
			Infoobj.id = listobj.id;
			dataFunction.Impression.ImpressionInfo(item,Infoobj,target.ImpressionInfoInfo,imgExhibition,Infoobj.id); // 详情处理函数
		}
	});
}


// 历史名人列表及详情处理函数
const HistoryCelebrity = (value,target,imgExhibition) => { 
	let id = 10;
	let num = value.length;
	value.forEach(item => {
		if(target.HistoryCelebrityList.length < num){
			console.log(item);
			let listobj = {};
			listobj.id = id++;
			dataFunction.Impression.HistoryCelebrityList(item,listobj,target.HistoryCelebrityList);
			let Infoobj = {};
			Infoobj.id = listobj.id;
			dataFunction.Impression.ImpressionInfo(item,Infoobj,target.ImpressionInfoInfo,imgExhibition,Infoobj.id);
		}
	})
}


// 文化符号列表及详情处理函数
const cultureSymbol = (value,target,imgExhibition) => {
	let id = 20;
	let num = value.length;
	value.forEach(item => {
		if(target.cultureSymbolList.length < num){
			console.log(item);
			let listobj = {};
			listobj.id = id++;
			dataFunction.Impression.cultureSymbolList(item,listobj,target.cultureSymbolList);
			let Infoobj = {};
			Infoobj.id = listobj.id;
		}
	})
}


// 主要景区列表及详情处理函数
const mainScenicSpots = (value,target,imgExhibition,gsp) => {
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		if(target.mainScenicSpotsList.length < num){
			let listobj = {}; // 列表
			listobj.id = id++;
			dataFunction.SecondIndex.mainScenicSpotsList(item,listobj,target.mainScenicSpotsList);
			let Infoobj = {}; // 详情
			Infoobj.id = listobj.id;
			dataFunction.SecondIndex.scenicInfo(item,Infoobj,target.scenicInfo,imgExhibition);
			let gpsobj = {};
			
			dataFunction.SecondIndex.mainScenicSpotsGps(item,gpsobj,gsp);
		}
	})
}

// 美丽乡村列表
const beautifulRural = (value,target,imgExhibition,gsp) => {
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		// console.log(item);
		if(target.beautifulRuralList.length < num){
			let listobj = {}; // 列表
			listobj.id = id++;
			dataFunction.SecondIndex.beautifulRuralList(item,listobj,target.beautifulRuralList);
			let Infoobj = {}; // 详情
			Infoobj.id = listobj.id;
			let gpsobj = {};
			dataFunction.SecondIndex.beautifulRuralGps(item,gpsobj,gsp);
		}
	})
}



// 路线攻略列表
const routeStrategy = (value,target) => {
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		console.log(target.routeStrategyList);
		if(target.routeStrategyList.length < num){
			let listobj = {}; // 列表
			listobj.id = id++;
			dataFunction.SecondIndex.routeStrategyList(item,listobj,target.routeStrategyList);
			let Infoobj = {}; // 详情
			Infoobj.id = listobj.id;
			Infoobj.position = listobj.position;
			item.addr = Infoobj.position;
			dataFunction.SecondIndex.routrInfo(item,Infoobj,target.routrInfo);
			console.log(listobj);
			console.log(Infoobj);
		}
	})
}

// 酒店列表
const howToPlayContent = (value,target,name,list,imgExhibition) => {
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		if(list.length < num){
			console.log(item);
			let listobj = {}; // 列表
			listobj.id = id++;
			dataFunction.howToPlay.howToPlayContentList(item,listobj,list);
			let Infoobj = {}; // 详情
			Infoobj.id = listobj.id;
			if(name == "酒店"){
				dataFunction.howToPlay.hotelInfo(item,Infoobj,target.howToPlayContentInfo,imgExhibition);
			}else if(name == "餐饮"){
				dataFunction.howToPlay.restaurantInfo(item,Infoobj,target.restaurantInfo,imgExhibition)
			}
			console.log(listobj);
			console.log(Infoobj);
			
		}
	})
}


// 地图数据
const Navigation = (value,target) => {
	let id = 1;
	let num = value.length;
	value.forEach(item => {
		if(target.mapLeft.length < num){
			let listobj = {};
			listobj.listArr = [];
			if(item.title == "厕所列表"){
				listobj.id = 1;
				listobj.svg1_url = require("@/assets/svg/Navigation/wc.svg");
				listobj.svg2_url = require("@/assets/svg/Navigation/wc_active.svg");
			}else if(item.title == "停车场列表"){
				listobj.id = 2;
				listobj.svg1_url = require("@/assets/svg/Navigation/Parking.svg");
				listobj.svg2_url = require("@/assets/svg/Navigation/parking_active.svg");
			}else if(item.title == "加油站列表"){
				listobj.id = 3;
				listobj.svg1_url = require("@/assets/svg/Navigation/gasStation.svg");
				listobj.svg2_url = require("@/assets/svg/Navigation/gasStation_active.svg");
			}
			listobj.state = false;
			item.content.replace(/\n/g,"").split("<br />").forEach(val => {
				let arr = val.split("|");
					let obj = {};
					obj.name = arr[0];
					obj.addr = arr[1];
					item.title == "厕所列表"? obj.id = 1 : item.title == "停车场列表"? obj.id = 2 : obj.id = 3
					obj.gps = {lng: parseFloat(arr[2].split(",")[0]), lat: parseFloat(arr[2].split(",")[1])};
					listobj.listArr.push(obj);
			});
			target.mapLeft.push(listobj);
		}
	})
}






export default {
	Foods,
	HistoryCelebrity,
	cultureSymbol,
	mainScenicSpots,
	beautifulRural,
	routeStrategy,
	howToPlayContent,
	Navigation
}














