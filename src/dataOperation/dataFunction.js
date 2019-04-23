// 数据处理函数文件

// 公用函数部分
const imgUrl = (value,target,state) => { // 获取图片路径
	const imgReg = /<img.*?(?:>|\/>)/gi;
	const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
	let array = value.match(imgReg);
	for (var j = 0; j < array.length; j++) { // 循环数组
		var src = array[j].match(srcReg); // 利用正则分割图片字符串
		// 获取图片地址
		if(src[1]){ // 判断分割后数组路径是否存在
			if(state){
				target.push(src[1]); // 讲路径存储进数组
			}else{
				target.src = src[1];
			}
			
		}
	}
}
const picFunction = (value,target) => { // textPic图片处理函数
	value.replace(/\n/g,"").split("<br />").forEach(val => {
		val.split("|").forEach((v,i) => {
			if(i > 0){
				imgUrl(v,target,1);
			}
		});
	});
}

// 缩略图数据处理函数
const picData = (value,target,id) => {
	let obj = {};
	obj.id = id; // id,用来获取这个对象
	obj.images = []; // 存储name和图片数组
	value.replace(/\n/g,"").split("<br />").forEach(val => {
		let obj1 = {}; // images内的对象
		obj1.images = []; // 图片数组
		val.split("|").forEach((v,i) => {
			if(i > 0){
				let imgObj = {}; // 图片对象
				imgUrl(v,imgObj,0); // 获取url参数
				imgObj.w = 750; // 方法后的宽度
				imgObj.h = 420; // 当大后的高度
				obj1.images.push(imgObj); // 将对象添加进图片数组中
			}else{
				obj1.name = v; // 将name添加进images内的对象中
			}
		});
		obj.images.push(obj1); // images内的对象存储进存储name和图片数组的数组内
	});
	target.push(obj); // 将存有id的对象存储进数组中
}


// 取出封面图片
const cover = (value,target,sign) => {
	value.split("<br />").forEach((val,index) => {
		if(index == 0){
			val.split("|").forEach((v,i) => {
				if(i > 0){
					imgUrl(v,target,sign);
				}
			});
		}
	});
}

// 分类标签函数
const label = (value,target,sign) => {
	value.split(sign).forEach(val => {
		let obj = {};
		if(val != ""){
			if(val=="5A"||val=="4A"||val=="3A"||val=="5星"||val=="4星"||val=="3星"){
				obj.state = 0;
			}else{
				obj.state = 1;
			}
			obj.labelName = val;
			target.push(obj);
		}
		
	});
}


const basicsInfo = (item,options,target) => { // 顶部基本信息列表
	if(options.state3 == 1){
		let obj = {};
		obj.svg_url1 = require("@/assets/svg/SecondIndex/phone_left.svg");
		obj.svg_url2 = require("@/assets/svg/SecondIndex/phone.svg");
		obj.text = "电话：" + item.phone;
		obj.state = 0
		target.push(obj);
	}
	if(options.state1 == 1){
			let obj = {};
			obj.svg_url1 = require("@/assets/svg/SecondIndex/time.svg");
			obj.svg_url2 = require("@/assets/svg/SecondIndex/phone.svg");
			obj.text = item.businesshours;
			obj.state = 0;
			target.push(obj);
		}
	if(options.state2 == 1){
		let obj = {};
		obj.svg_url1 = require("@/assets/svg/SecondIndex/area.svg");
		obj.svg_url2 = require("@/assets/svg/SecondIndex/back_right.svg");
		obj.text = item.addr;
		obj.state = 1;
		target.push(obj);
	}
}
// 详情页顶部数据处理函数
const InfoHeader = (item,target,title1,options1) => {
	target.title1 = title1;
	target.title = item.title;
	target.price = item.price;
	target.phone = item.phone;
	target.label = [];
	label(item.keywords,target.label,"|");
	target.basicSituation = [];
	basicsInfo(item,options1,target.basicSituation);
}




// 美食特产列表数据处理函数
const FoodsListData = (item,options,target) => {
	options.title = item.title; // 标题
	options.description = item.description; // 简介
	options.svg_url = require("@/assets/svg/Foods/Foods" + options.id + ".svg"); // svg图标
	target.push(options);
}


// 历史名人列表
const HistoryCelebrityList = (item,options,target) => {
	options.title = item.title; // 标题
	options.img_url = require("@/assets/img/HistoryCelebrity/HistoryCelebrity" + options.id + ".png");
	target.push(options);
	console.log(options);
}


// 文化符号列表
const cultureSymbolList = (item,options,target) => {
	
}

// 美食，历史，文化详情页数据处理函数
const ImpressionInfo = (item,options,target,imgExhibition,id) => {
	console.log(id);
	if(id < 10){
		options.bj_url = require("@/assets/img/ImpressionInfo/ImpressionInfo" + options.id + ".jpg"); // svg图标
	}
	options.title = item.title; // 标题
	options.description = item.description; // 介绍
	// 背景图
	options.bj_url = require("@/assets/img/ImpressionInfo/ImpressionInfo" + options.id + ".jpg");
	options.textPic = {}; // 文组图片组件对象
	options.textPic.content1 = item.content; // 文字
	options.textPic.images = []; // 图片数组
	options.textPic.urlName = "ImpressionInfo&" + options.id; // 缩略图页面标识
	picFunction(item.images,options.textPic.images); // 图片收集函数
	picData(item.images,imgExhibition.ImpressionInfo,options.id); // 缩略图页面数据处理函数
	target.push(options);
}


// 主要景区列表
const mainScenicSpotsList = (item,options,target) => {
	cover(item.images,options,0);
	options.label = [];
	label(item.credit,options.label,"|");
	target.push(options);
}

// 景区详情子景区数组
const sonScenery = (value,target) => {
	value.split("<br />").forEach((val,index) => {
		if(val != ""){
			let obj = {}; // 创建对象
			let arr = val.replace(/\n/g,"").split("|");
			obj.name = arr[0]; // 景区名称
			obj.price = arr[1]; // 景区价格
			imgUrl(arr[2],obj,0);
			target.push(obj);
		}
	})
}

// 主要景区地图数据
const mainScenicSpotsGps = (item,options,target) => {
	let arr = item.gps.split(",");
	options.gps = {lng: parseFloat(arr[0]), lat: parseFloat(arr[1])};
	options.title = item.title;
	options.label = [];
	label(item.keywords,options.label,"|");
	options.price = item.price;
	// console.log(item.images.replace(/\n/g,"").split("<br />"));
	let imgArr = item.images.replace(/\n/g,"").split("<br />");
	var string = imgArr[imgArr.length - 1];

	
	// console.log(imgArr[imgArr.length - 1]);
	if(string.length != 1){
		imgUrl(string.split("|")[1],options,0)
	}else{
		imgUrl(imgArr[imgArr.length - 2].split("|")[1],options,0)
	}
	target.push(options);
	
}

// 景区详情
const scenicInfo = (item,options,target,imgExhibition) => {
	options.header = {};
	InfoHeader(item,options.header,"景区详情",{state1: 1,state2: 1});
	options.sonScenery = [];
	if(item.subSite != ""){
		sonScenery(item.subSite,options.sonScenery);
	}
	options.textPic = {};
	options.textPic.images = [];
	options.textPic.content3 = item.content;
	picFunction(item.images,options.textPic.images);
	options.textPic.urlName = "scenicInfo&" + options.id; // 缩略图页面标识
	picData(item.images,imgExhibition.scenicInfo,options.id);
	target.push(options);
}


// 乡村列表
const beautifulRuralList = (item,options,target) => {
	options.title = item.title;
	options.label = [];
	options.tags = [
		{
		  text: "标签名",
		  color: "rgba(0,195,190,1)"
		},
	]
	label(item.credit,options.label,"|");
}

const beautifulRuralGps = (item,options,target) => {
	let arr = item.gps.split(",");
	options.gps = {lng: parseFloat(arr[0]), lat: parseFloat(arr[1])};
	options.title = item.title;
	options.label = [];
	label(item.keywords,options.label,"|");
	options.price = item.price;
	// console.log(item.images.replace(/\n/g,"").split("<br />"));
	let imgArr = item.images.replace(/\n/g,"").split("<br />");
	var string = imgArr[imgArr.length - 1];
	if(string.length != 1){
		imgUrl(string.split("|")[1],options,0)
	}else if(imgArr[imgArr.length - 2].length != 1){
		imgUrl(imgArr[imgArr.length - 2].split("|")[1],options,0)
	}else{
		imgUrl(imgArr[imgArr.length - 3].split("|")[1],options,0);
	}
	target.push(options);
}


const addr = (value,target) => {
	let str = "";
	value.replace(/\n/g,"").split("<br />").forEach(item => {
		str += "—" + item.split("|")[0];
	});
	target.position = str.replace("—","");
}
// 路线列表
const routeStrategyList = (item,options,target) => {
	options.price = item.price;
	options.title = item.title;
	addr(item.content,options);
	options.cover = item.cover;
	target.push(options);
}

// 路线详情
const routrInfo = (item,options,target) => {
	options.header = {};
	InfoHeader(item,options.header,"路线详情",{state2: 1});
	options.title = item.title;
	options.label = [];
	label(item.keywords,options.label,"|");
	options.description = item.description;
	options.routrInfoSwiper = [];
	options.routeStrategy = [];
	item.content.replace(/\n/g,"").split("<br />").forEach((val,i) => {
		options.routrInfoSwiper.push(i + 1);
		let obj = {};
		obj.placeName = val.split("|")[0];
		obj.text = val.split("|")[1];
		obj.images = [];
		imgUrl(val.split("|")[2],obj.images,1);
		options.routeStrategy.push(obj);
	});
	
	
	
	target.push(options);
}

// 酒店列表
const howToPlayContentList = (item,options,target) => {
	options.images = [];
	cover(item.images,options.images,1);
	options.title = item.title;
	options.label = [];
	label(item.keywords,options.label,"|");
	options.addr = item.addr; // 地名
	options.price = item.price; // 价格
	target.push(options);
}



const screening = (value,target) => {
	let id = 1;
	let arr1 = [];
	let arr2 = [];
	value.replace(/\n/g,"").split("<br />").forEach(val => {
		let obj = {}; // 筛选条件
		let obj1 = {}; // 显示内容
		obj1.images = []; // 图片内容
		obj1.label = [];
		let arrLength = val.split("|").length;
		val.split("|").forEach((v,i) => {
			if(i == 0){
				obj.id = id++;
				obj.conditionName = v;
				obj1.name = v;
			}else if(i == 1){
				obj1.id = obj.id;
				obj1.price = v;
			}else if(i == 2){
				label(v,obj1.label,"#");
			}else{
				imgUrl(v,obj1.images,1);
			}
		});
		arr1.push(obj);
		arr2.push(obj1);
		target.condition = arr1;
		target.priceImg = arr2;
	});
}
const matching = (value,target) => {
	value.replace(/\n/g,"").split("<br />").forEach(val => {
		if(val.split("|")[0] == "配套"){
			imgUrl(val.split("|")[1],target,0);
		}
	})
}

// 酒店详情
const hotelInfo = (item,options,target,imgExhibition) => {
	options.header = {};
	InfoHeader(item,options.header,"酒店详情",{state3: 1, state2: 1,});
	options.classify = {}; // 房间类型 
	options.classify.condition = []; // 类型筛选
	options.classify.priceImg = []; // 图片及文字
	screening(item.subSite,options.classify); // 调用函数获取房间类型数据
	options.textPic = {};
	options.textPic.content3 = item.content;
	options.textPic.images = [];
	picFunction(item.images,options.textPic.images);
	picData(item.images,imgExhibition.hotelInfo,options.id);
	options.facilitate = []; // 便利服务列表
	item.services.split(",").forEach(v => {
		if(v != ""){
			options.facilitate.push(parseInt(v));
		}
	});
	options.matchingText = item.service_content;
	matching(item.images,options);
	options.img_url = options.src;
	target.push(options);
}

const restaurantInfo = (item,options,target,imgExhibition) => {
	options.header = {};
	InfoHeader(item,options.header,"酒店详情",{state1: 1, state2: 1,});
	options.food = [];
	item.subSite.replace(/\n/g,"").split("<br />").forEach(val => {
		if(val != ""){
			let obj = {};
			let arr = val.split("|");
			obj.name = arr[0];
			obj.price = arr[1];
			obj.introduce = arr[2];
			obj.label = [];
			label(arr[3],obj.label,"#");
			imgUrl(val.split("|")[4],obj);
			obj.img_url = obj.src;
			options.food.push(obj);
		}
	});
	options.textPic = {};
	options.textPic.content1 = item.content;
	options.textPic.images = [];
	picFunction(item.images,options.textPic.images);		
				
				
	target.push(options);
}




export default {
	Impression: { // 崇阳印象函数
		FoodsListData, // 美食特产列表数据处理函数
		ImpressionInfo, // 美食，历史，文化详情页数据处理函数
		HistoryCelebrityList,
		cultureSymbolList
	},
	SecondIndex: {
		mainScenicSpotsList,
		scenicInfo,
		beautifulRuralList,
		routeStrategyList,
		routrInfo,
		mainScenicSpotsGps,
		beautifulRuralGps
	},
	howToPlay: {
		howToPlayContentList,
		hotelInfo,
		restaurantInfo
	}
}

















