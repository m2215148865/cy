<template>
	<div class="scenicInfo">
		<InfoTop :header="InfoData.header"></InfoTop>
		<sonScenery :sonScenery="InfoData.sonScenery"></sonScenery>
		<textPic :textState="textState" :textPic="InfoData.textPic"></textPic>
		<Infobottom :price="price"></Infobottom>
	</div>
</template>

<script>
import InfoTop from "@/components/InfoTop.vue";
import sonScenery from "@/components/infoComponents/sonScenery.vue";
import textPic from "@/components/textPic.vue";
import Infobottom from "@/components/Infobottom.vue";
export default{
	data(){
		return {
			id: this.$route.params.id,
			InfoData: {},
			textState: 1,
			price: 100
		}
	},
	components: {
		InfoTop,
		sonScenery,
		textPic,
		Infobottom
	},
	created(){
		let arrLength = this.$store.getters.scenicInfo.length;
		for(let i = 0; i < arrLength; i++){
			if(this.$store.getters.scenicInfo[i].id == this.id){
				this.InfoData = this.$store.getters.scenicInfo[i];
				console.log(this.InfoData);
				break;
			}
		};
		if(JSON.stringify(this.InfoData) == "{}"){
			this.InfoData = JSON.parse(localStorage.getItem("obj"));
		}else{
			localStorage.setItem("obj",JSON.stringify(this.InfoData));
		}
	}
}
</script>

<style lang="scss" scoped>
	.scenicInfo{
		margin-bottom: 150px;
	}
</style>
