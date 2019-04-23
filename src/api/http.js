import axios from "axios";
// http://hmltec.com/cms/index.php?m=api&c=index&a=query&site=崇阳&position=乡村列表
// 配置全局根域名
// axios.defaults.baseURL = 'http://hmltec.com/cms/index.php?m=api&c=index&a=query&site=崇阳&position=';

// 美食列表请求
export const FoodsList = () => {
	return axios.get("http://hmltec.com/cms/index.php?m=api&c=index&a=query&site=崇阳&position=特产列表");
}

// 请求
export const http = (Listname) => {
	return axios.get("http://hmltec.com/cms/index.php?m=api&c=index&a=query&site=崇阳&position=" + Listname);
}