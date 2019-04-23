<template>
	<div class="hotelInfo">
		<InfoTop :header="InfoData.header"></InfoTop>
		<hotelInfoSwiper :list="InfoData.classify.condition" @fn='getsonmsg'></hotelInfoSwiper>
		<rommList :list="rommListData"></rommList>
		<textPic :textPic="InfoData.textPic" :textState="true"></textPic>
		<hotelContent
		:facilitate="InfoData.facilitate"
		:matchingText="InfoData.matchingText"
		:img_url="InfoData.img_url"
		></hotelContent>
	</div>
</template>

<script>
import InfoTop from "@/components/InfoTop.vue";
import hotelInfoSwiper from "@/components/hotelInfo/hotelInfoSwiper.vue";
import rommList from "@/components/hotelInfo/roomList.vue";
import textPic from "@/components/textPic.vue";
import hotelContent from "@/components/hotelInfo/hotelContent.vue";
export default{
	data(){
		return {
			id: this.$route.params.id,
			InfoData: {},
			rommListData: {}
		}
	},
	components: {
		InfoTop,
		hotelInfoSwiper,
		rommList,
		textPic,
		hotelContent
	},
	created(){
		let arr = this.$store.getters.howToPlayContentInfo;
		let arrLength = arr.length;
		for(let i = 0; i < arrLength; i++){
			if(this.id == arr[i].id){
				this.InfoData = arr[i];
				break;
			}
		}
		if(JSON.stringify(this.InfoData) == "{}"){
			this.InfoData = JSON.parse(localStorage.getItem("obj"));
		}else{
			localStorage.setItem("obj",JSON.stringify(this.InfoData));
		}
		console.log(this.InfoData);
		this.rommListData = this.InfoData.classify.priceImg[0]
		
	},
	methods: {
		getsonmsg(id){
			this.rommListData = this.InfoData.classify.priceImg[id - 1];
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>
