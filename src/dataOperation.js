// labelFor 函数第一个值为分割之后的字符串，第二个值为数组
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
// 主要景区数据
export const mainScenicSpots = (state,value) => {
	value.forEach(item => {
		if(state.mainScenicSpotsList.length == 0){
			// 列表页数据
			let Listobj = {}; 
			Listobj.id = item.id; // 获取id存进对象
			Listobj.label = []; // 标签
			labelFor(item.credit.split("|"),Listobj.label); // 调用函数，处理标签数据
			Listobj.img_url = item.cover; // 列表图片
			state.mainScenicSpotsList.push(Listobj); // 讲数据添加在数组的最后一项
			
			// 详情页数据
			let InfoObj = {};
			InfoObj.header = {}; // 详情页头部数据
			InfoObj.header.title = item.title; // 标题
			InfoObj.header.title1 = "景区详情"; // 分类标题
			InfoObj.header.label = Listobj.label; // 标签
			InfoObj.header.price = item.price; // 价格
			// InfoObj.header.priceState = item.price? 1 : 0; // 价格状态
			InfoObj.header.phone = item.phone;
			InfoObj.header.basicSituation = [ // 基本情况列表
				{
					svg_url1: require("@/assets/svg/SecondIndex/time.svg"),
					time: "营业时间：" + item.businesshours,
					svg_url2: require("@/assets/svg/SecondIndex/phone.svg"),
					sign: 0
				},
				{
					svg_url1: require("@/assets/svg/SecondIndex/area.svg"),
					time: item.addr,
					svg_url2: require("@/assets/svg/SecondIndex/back_right.svg"),
					sign: 1
				}
			];
			InfoObj.subSites = []; // 子景区
			InfoObj.id = Listobj.id;
			item.subSite.split("<br />").forEach(value => { // 子景区列表
				let obj = {};
				let arr = value.split("|");
				if(arr.length == 1) return;
				obj.name = arr[0];
				obj.price = arr[1];
				obj.img_url = arr[2];
				InfoObj.subSites.push(obj);
			});
			InfoObj.textPic = {}; // 图文数据
			InfoObj.textPic.content3 = item.content;
			InfoObj.textPic.images = [];
			item.images.split("<br />").forEach(value => { // 图文香型图片列表
				let arr = value.split("|");
				arr.forEach((v,i) => {
					if(i != 0 && InfoObj.textPic.images.length < 4){
						InfoObj.textPic.images.push(v);
					}
				});
			});
			
			InfoObj.textPic.imagesInfo = []; // 画册详情列表
			item.images.split("<br />").forEach(value => {
				let arr = value.split("|");
				let obj = {};
				obj.name = arr[0];
				obj.img_url = [];
				arr.forEach((v,i) => {
					if(i != 0){
						obj.img_url.push(v);
					}
				});
				InfoObj.textPic.imagesInfo.push(obj);
			});
			state.scenicInfo.push(InfoObj);
			console.log(state.scenicInfo,state.mainScenicSpotsList);
			
		}
		/*
			obj1.title = item.title;
			obj1.businesshours = item.businesshours;
			obj1.addr = item.addr;
			obj1.phone = item.phone;
			obj1.subSites = [];
			item.subSite.split("<br />").forEach(value => {
				let obje = {};
				let arr = value.split("|");
				if(arr.length == 1) return;
				obje.name = arr[0];
				obje.price = arr[1];
				obje.img_url = arr[2];
				obj1.subSites.push(obje);
			});
			obj1.images = [];
			item.images.split("<br />").forEach(value => {
				let arr = value.split("|");
				let obj = {};
				obj.name = arr[0];
				obj.img_url = [];
				arr.forEach((v,i) => {
					if(i != 0){
						obj.img_url.push(v);
					}
				});
				obj1.images.push(obj);
			});
			obj1.content = item.content;
			obj1.price = item.price;
			state.SecondIndex.routrInfo.push(obj1);
			console.log(state.SecondIndex.routrInfo);
		}
		*/
	});
};

// 路线攻略数据
export const routeStrategy = (state,value) => {
	value.forEach(item => {
			console.log(item);
			if(state.routeStrategyList.length == 0){
			// 列表数据
			let ListObj = {};
			ListObj.id = item.id; // id
			ListObj.title = item.title; // 标题
			ListObj.price = item.price; // 价格
			ListObj.position = "";
			ListObj.day = 0;
			item.content.split("<br />").forEach(val => { // 地名
				ListObj.day++;
				ListObj.position += "—" + val.split("|")[0];
			});
			ListObj.position = ListObj.position.replace(/—/,"");
			ListObj.img_url = item.cover; // 图片
			state.routeStrategyList.push(ListObj);
			console.log("列表",ListObj);
			
			// 详情数据
			let InfoObj = {};
			InfoObj.header = {};
			InfoObj.id = ListObj.id; // id
			InfoObj.header.title1 = "路线详情"; // 顶部标题
			InfoObj.header.title = item.title; // 标题
			InfoObj.header.label = [];
			labelFor(item.keywords.split("|"),InfoObj.header.label);
			InfoObj.header.basicSituation = [
				{
					svg_url1: require("@/assets/svg/SecondIndex/area.svg"),
					time: ListObj.position,
					svg_url2: require("@/assets/svg/SecondIndex/back_right.svg"),
					sign: 1
				}
			];
			InfoObj.day = ListObj.day;
			InfoObj.description = item.description;
			InfoObj.mainList = [];
			item.content.split("<br />").forEach((val) => {
				let obj = {};
				obj.images = [];
				val.split("|").forEach((v,i) => {
					if(i > 1){
						obj.images.push(v);
					}else if(i == 0){
						obj.placeName = v;
					}else if(i == 1){
						obj.introduce = val.split("|")[1];
					}
				})
				InfoObj.mainList.push(obj);
			});
			
			
			
			state.routrInfo.push(InfoObj);
			console.log(InfoObj);
			}
	});
}

export const howToPlayContent = (state,value) => {
	value.forEach(item => {
		if(state.howToPlayContentList.length == 0){
			console.log(item);
			// 列表
			let listObj = {};
			listObj.title = item.title; // 标题
			listObj.label = []; // 标签
			labelFor(item.keywords.split("|"),listObj.label);
			listObj.addr = item.addr; // 地址
			listObj.price = item.price; // 价格
			state.howToPlayContentList.push(listObj); // 存储进列表数组中
			console.log(listObj);
			
			// 详情
			let InfoObj = {};
			InfoObj.header = {};
			InfoObj.header.title = listObj.title;
			InfoObj.header.label = listObj.label;
			InfoObj.header.price = listObj.price;
			InfoObj.header.basicSituation = [
				{
					svg_url1: require("@/assets/svg/SecondIndex/phone_left.svg"),
					time: "电话：" + item.phone,
					svg_url2: require("@/assets/svg/SecondIndex/phone.svg"),
					sign: 0
				},
				{
					svg_url1: require("@/assets/svg/SecondIndex/area.svg"),
					time: item.addr,
					svg_url2: require("@/assets/svg/SecondIndex/back_right.svg"),
					sign: 1
				}
			];
			InfoObj.condition = [];
			InfoObj.roomList = [];
			const imgReg = /<img.*?(?:>|\/>)/gi;
			const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
			item.subSite.split("<br />").forEach((val,index) => { // 筛选条件
				let obj = {};
				obj.id = index + 1;
				obj.conditionName = val.split("|")[0];
				InfoObj.condition.push(obj);
			})
			
			
			item.subSite.split("<br />").forEach((val,index) => { // 轮播图列表
				let obj = {};
				let arrLength = val.split("|").length;
				obj.id = index + 1;
				for(let i = 0; i < arrLength; i++){
					if(i == 1){
						obj.price = val.split("|")[i]; // 价格
					} else if(i > 1){
						let arr = val.split("|")[i].match(imgReg);
						for (var j = 0; j < arr.length; j++) {
							 var src = arr[j].match(srcReg);
							 //获取图片地址
							 if(src[1]){
								obj.img_src = src[1]; // 图片
							 }
						}
					}
					
				}
				InfoObj.roomList.push(obj);
			});
			InfoObj.content = item.content; // 文字内容
			InfoObj.service_content = item.service_content; // 配套服务
			InfoObj.services = [];
			item.services.split(",").forEach(value => {
				if(value != ""){
					InfoObj.services.push(parseInt(value));
				}
			});
			
			item.images.split("<br />").forEach(value => { // 图文香型图片列表
				let arr = value.split("|");
				arr.forEach((v,i) => {
					if(i != 0 && InfoObj.textPic.images.length < 4){
						InfoObj.textPic.images.push(v);
					}
				});
			});
			
			InfoObj.textPic.imagesInfo = []; // 画册详情列表
			item.images.split("<br />").forEach(value => {
				let arr = value.split("|");
				let obj = {};
				obj.name = arr[0];
				obj.img_url = [];
				arr.forEach((v,i) => {
					if(i != 0){
						obj.img_url.push(v);
					}
				});
				InfoObj.textPic.imagesInfo.push(obj);
			});
			
// 			item.subSite.split("<br />").forEach(val => {
// 				val.split("|").forEach((v,i) => {
// 					if(imgReg.test(v)){
// 						var arr = v.match(imgReg);
// 						for (var i = 0; i < arr.length; i++) {
// 							 var src = arr[i].match(srcReg);
// 							 //获取图片地址
// 							 if(src[1]){
// 								let obj = {};
// 							 	obj.img_url = src[1];
// 								InfoObj.roomList.push(obj);
// 							 }
// 						}
// 					}
// 				})
// 			});
			
			
			
			
			
			
			
			
			
			
			
			
			console.log(InfoObj);
			
			
		}
	});
}





































