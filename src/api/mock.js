import Mock from "mockjs"; // 引入mockjs制造数据

// 首页列表数据
const indexList = Mock.mock("http://www.cy/indexList",{
	"data|5":[
		{
			"id|+1": 1,
			"name|+1": ["崇阳印象","畅游崇阳","玩转崇阳","崇阳导览","项目招商"],
			"url|+1": ["/Impression","/SecondIndex","/howToPlay","/Navigation","/"]
		}
	]
});

// 崇阳印象顶部列表数据
const ImpressionList = Mock.mock("http://www.cy/ImpressionList",{
	"data|4": [
		{
			"id|+1": 1,
			"name|+1": ["县城风貌","美食特产","历史名人","文化符号"],
			"url|+1": ["countyScenery","Foods","HistoryCelebrity","cultureSymbol"]
		}
	]
});

// 县城风貌左侧列表数据
const countySceneryRight = Mock.mock("http://www.cy/countySceneryRight",{
	"data|3": [
		{
			"id|+1": 1,
			"name|+1": ["重要地标","交通网络","配套设施"],
			"img_url|+1": [require("@/assets/svg/Impression/area_mark.svg"),require("@/assets/svg/Impression/traffic_network.svg"),require("@/assets/svg/Impression/supporting_facilities.svg")],
			"img_urlActive|+1": [require("@/assets/svg/Impression/area_mark_active.svg"),require("@/assets/svg/Impression/traffic_network_active.svg"),require("@/assets/svg/Impression/supporting_facilities_active.svg")]
		}
	]
});

// 美食详情列表数据
const FoodsList = Mock.mock("http://www.cy/FoodsList",{
	"data|9": [
		{
			"id|+1": 1,
			"title|+1": ["麻花","炸豆腐","野桂花蜜","糯米甜酒","剁辣椒","雷竹笋","茶叶","天城香米","工艺扇"],
			"img_url|+1": [require("@/assets/svg/Impression/麻花.svg"),require("@/assets/svg/Impression/炸豆腐.svg"),require("@/assets/svg/Impression/野桂花蜜.svg"),require("@/assets/svg/Impression/糯米甜酒.svg"),require("@/assets/svg/Impression/剁辣椒.svg"),require("@/assets/svg/Impression/雷竹笋.svg"),require("@/assets/svg/Impression/茶叶.svg"),require("@/assets/svg/Impression/天成香米.svg"),require("@/assets/svg/Impression/工艺扇.svg")],
			"briefIntroduction|+1": ["介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介...","介绍介绍介绍介绍介绍介绍介绍介绍介..."]
		}
	]
});

// 历史名人列表数据
const HistoryCelebrityList = Mock.mock("http://www.cy/HistoryCelebrityList",{
	"data|10": [
		{
			"id|+1": 1,
			"title|+1": ["一代廉史张乖崖","崇阳县君李辰妃","黄庭坚金城留韵","包公贤孙包永年","史部尚书汪宗伊","京剧名宿米应生","铁匠诗人陈瑞兆","肝胆一生陈寿昌","九三学徒吴藻溪","武大校长王世杰"],
			"img_url|+1": [require("@/assets/img/Impression/zyg.png"),require("@/assets/img/Impression/lcf.png"),require("@/assets/img/Impression/htj.png"),require("@/assets/img/Impression/byn.png"),require("@/assets/img/Impression/wzy.png"),require("@/assets/img/Impression/mys.png"),require("@/assets/img/Impression/crz.png"),require("@/assets/img/Impression/csc.png"),require("@/assets/img/Impression/wzy.png"),require("@/assets/img/Impression/wsj.png")]
		}
	]
});



// 畅游崇阳顶部列表数据
const SecondIndexList = Mock.mock("http://www.cy/SecondIndexList",{
	"data|3": [
		{
			"id|+1": 1,
			"name|+1": ["主要景区","美丽乡村","路线攻略"],
			"url|+1": ["mainScenicSpots","beautifulRural","routeStrategy"]
		}
	]
});

// 主要景区列表数据
const mainScenicSpotsList = Mock.mock("http://www.cy/mainScenicSpotsList",{
	"data|10": [
		{
			"id|+1": 1,
			"img_url|+1": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1246210387,245892595&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2563255527,3531629520&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2744966649,1683455002&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1246210387,245892595&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2563255527,3531629520&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2744966649,1683455002&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1246210387,245892595&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2563255527,3531629520&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2744966649,1683455002&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1246210387,245892595&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2563255527,3531629520&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2744966649,1683455002&fm=26&gp=0.jpg"],
			"classification|+1": [
				[
					{
						"classificationName|+1": ["5A","标签名","标签名"]
					}
				],
				[
					{
						"classificationName|+1": ["标签名","标签名","标签名"]
					}
				],
				[
					{
						"classificationName|+1": ["标签名","标签名","标签名"]
					}
				]
			]
		}
	]
});

// 景区详情数据
const scenicInfo = Mock.mock("http://www.cy/scenicInfo",{
	
});
// 子景观列表数据
const sonSceneryList = Mock.mock("http://www.cy/sonSceneryList",{
	"data|6-10":[
		{
			"id|+1": 1,
			"url|+1": ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1612261032,1212092836&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3183185248,2945242974&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1307760260,766268206&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3303076983,240503279&fm=15&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2990998320,1983644321&fm=15&gp=0.jpg","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918963483,1299481739&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1268241946,1949421997&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2699763489,1946543877&fm=15&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2258643261,637014836&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3030707508,1621208051&fm=15&gp=0.jpg"],
			"price|+1": ["免费","50","50","免费","150","300","30","免费","20","80"],
			"name|+1": ["昙华林","光之国","海军基地","东海","西海","南海","北海","红土大陆","罗格镇","司法岛"]
		}
		
	]
});

// 路线攻略列表数据
const routeStrategyList = Mock.mock("http://www.cy/routeStrategyList",{
	"data|5-10":[
		{
			"id|+1": 1,
			"placeName": "湖北—武汉—洪山区—武汉大学",
			"routeName": "武汉大学一日游",
			"time|3-8": 8,
			"price|800-1500": 1500,
			"src": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1391109773,3131482482&fm=26&gp=0.jpg"
			
		}
	]
})

// 路线详情数据
const routerList = Mock.mock("http://www.cy/routerList",{
	"data|5-8": [
		{
			text:"只要半个平米的价格，日韩新马泰都玩了一圈；一两个平米的价格，欧美列国也回来了；下一步只好策划去埃及南非这些更为神奇的所在；几年下来，全世界你都玩遍，可能还没花完一个厨房的价钱；但是那时候，说不定你的世界观都已经变了。生活在于经历，而不在于平米；富裕在于感悟，而不在于别墅。",
			Trip: "先去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这",
			Trip: "先去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这",
			Trip: "先去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这，再去那，然后再去这",
		}
	]
});


const routrInfoSliderList = Mock.mock("http://www.cy/routrInfoSliderList",{
	"data|5-8": [
		{
			"id|+1": 1,
			"url|+1": ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1921268940,2574114907&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4022666440,2683306647&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3061630111,196180577&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=992310172,4161434414&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3429559826,1206311695&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4072757242,4211624537&fm=15&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1175970572,4241435747&fm=15&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3210812570,1794035531&fm=26&gp=0.jpg"]
		}
	]
});

// 玩转崇阳顶部数据
const howToPlayList = Mock.mock("http://www.cy/howToPlayList",{
	"data|5":[
		{
			"id|+1": 1,
			"name|+1": ["酒店","餐厅","购物","娱乐","出行"],
			"url|+1":["howToPlayContent","restaurant","/","/","Trip"]
		}
	]
});

const NavigationList = Mock.mock("http://www.cy/NavigationList",{
	"data|4": [
		{
			"id|+1": 1,
			"url|+1": [require("@/assets/svg/Navigation/scenicSpot.svg"),require("@/assets/svg/Navigation/rural.svg"),require("@/assets/svg/Navigation/route.svg"),require("@/assets/svg/Navigation/periphery.svg")],
			"url2|+1": [require("@/assets/svg/Navigation/scenicSpot_active.svg"),require("@/assets/svg/Navigation/rural_active.svg"),require("@/assets/svg/Navigation/route_active.svg"),require("@/assets/svg/Navigation/periphery_active.svg")],
			"name|+1": ["景区","乡村","路线","周边"],
			falg:false
		}
	]
});

const NavigationList2 = Mock.mock("http://www.cy/NavigationList2",{
	"data|3": [
		{
			"id|+1": 1,
			"url|+1": [require("@/assets/svg/Navigation/wc.svg"),require("@/assets/svg/Navigation/Parking.svg"),require("@/assets/svg/Navigation/gasStation.svg")],
			"url2|+1": [require("@/assets/svg/Navigation/wc_active.svg"),require("@/assets/svg/Navigation/parking_active.svg"),require("@/assets/svg/Navigation/gasStation_active.svg")],
			"name|+1": ["厕所","停车场","加油站"],
			falg:false
		}
	]
});

const NavigationRight = Mock.mock("http://www.cy/NavigationRight",{
	"data|4": [
		{
			"id|+1": 1,
			"url|+1": [require("@/assets/svg/Navigation/Hotel.svg"),require("@/assets/svg/Navigation/restaurant.svg"),require("@/assets/svg/Navigation/Shopping.svg"),require("@/assets/svg/Navigation/entertainment.svg")],
			"url2|+1": [require("@/assets/svg/Navigation/Hotel_active.svg"),require("@/assets/svg/Navigation/restaurant_active.svg"),require("@/assets/svg/Navigation/Shopping_active.svg"),require("@/assets/svg/Navigation/entertainment_active.svg")],
			"name|+1": ["酒店","餐饮","购物","娱乐"],
			falg:false
		}
	]
});


// 美食详情图片数据
const imgExhibitionList = Mock.mock("http://www.cy/imgExhibitionList",{
	"data|4":[
		{
			"name|+1":["封面","外观","内景","菜品"],
			"id|+1": 1,
			"img_url|3-8":[{
				src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1561691189,881877434&fm=26&gp=0.jpg",
				w: 750,
				h: 420
				
			}]
		}
	]
});






export default {
	indexList,
	ImpressionList,
	countySceneryRight,
	FoodsList,
	HistoryCelebrityList
}
