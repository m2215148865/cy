<template>
	<div class="restaurantInfo">
		<InfoTop :header="InfoData.header"></InfoTop>
		<menuList :food="InfoData.food"></menuList>
		<textPic :textPic="InfoData.textPic"></textPic>
	</div>
</template>

<script>
import InfoTop from "@/components/InfoTop.vue";
import menuList from "@/components/restaurantInfo/menuList.vue";
import textPic from "@/components/textPic.vue";
export default{
	data(){
		return {
			id: this.$route.params.id,
			InfoData: {}
		}
	},
	components: {
		InfoTop,
		menuList,
		textPic
	},
	created(){
		let arr = this.$store.getters.restaurantInfo;
		let arrLength = this.$store.getters.restaurantInfo.length;
		console.log(arr);
		for(let i = 0; i < arrLength; i++){
			if(arr[i].id == this.id){
				this.InfoData = arr[i];
				break;
			}
		}
		if(JSON.stringify(this.InfoData) == "{}"){
			this.InfoData = JSON.parse(localStorage.getItem("obj"));
		}else{
			localStorage.setItem("obj",JSON.stringify(this.InfoData));
		}
	}
}
</script>

<style lang="scss" scoped>
	.restaurantInfo{
		margin-bottom: 64px;
	}
</style>
