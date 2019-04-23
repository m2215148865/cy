<template>
	<div class="panorama1">
		<router-link class="switch" to="panorama2" tag="div">
			<img src="@/assets/svg/SecondIndex/switch1.svg">
		</router-link>
		<ImgSwiprt :list="$store.getters.vtourArr[numId].sceneArr"></ImgSwiprt>
		<textSwiper :vtourArr="vtourArr" @fun="getsonmsg"></textSwiper>
	</div>
</template>

<script>

import ImgSwiprt from "@/components/panorama/ImgSwiper.vue";
import textSwiper from "@/components/panorama/textSwiper.vue";
export default{
	data(){
		return {
			vtourArr: [],
			numId: 0
		}
	},
	components: {
		ImgSwiprt,
		textSwiper
	},
	created(){
		this.vtourArr = this.$store.getters.vtourArr;
	},
	mounted(){
	},
	methods: {
		getsonmsg(id){
			this.numId = id;
		}
	}
}
</script>

<style lang="scss" scoped>
	.panorama1{
		.switch{
			width: 38px;
			height: 40px;
		}
	}
</style>
