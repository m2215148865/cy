<template>
	<div class="mainScenicSpots" v-if="falg">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<router-link
				class="swiper-slide"
				v-for="item in $store.getters.mainScenicSpotsList"
				:key="item.id"
				:to="'/panorama/' + item.id"
				tag="div"
				>
					<img :src="item.src">
					<div class="label">
						<classification :label="item.label" :Info="'howToPlayContent'"></classification>
					</div>
				</router-link>
			</div>
			<div class="swiper-pagination"></div>
		</div>

	</div>
</template>

<script>
import Swiper from "swiper";
import classification from "@/components/classification";
export default{
	data(){
		return {
			list: [],
			falg: false
		}
	},
	mounted(){
		setTimeout(() => {
			var swiper = new Swiper('.swiper-container', {
				observer: true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents: true,//修改swiper的父元素时，自动初始化swiper
				slidesPerView: 1.33,
				spaceBetween: 0,
				centeredSlides: true,
			// 			pagination: {
			// 				el: '.swiper-pagination',
			// 				dynamicBullets: true,
			// 				dynamicMainBullets: 0
			// 			},
					});
		},200);
	},
	components: {
		classification
	},
	created(){
		setTimeout(() => {
			this.falg = true;
		},200);
		this.$store.dispatch('mainScenicSpotsList');
	}
}
</script>

<style lang="scss" scoped>
	.mainScenicSpots{
		position: absolute;
		height: 100%;
		background: #F5F7FA;
		padding-top: 66px;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		text-align: center;
		font-size: 36px;
		background: #0cf;
		height: 840px;
		border-radius: 10px;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		transition: 300ms;
		position: relative;
		img{
			border-radius: 10px;
			height: 100%;
		}
		.label{
			position: absolute;
			left: 43px;
			bottom: 64px;
		}
	}
	.swiper-slide:not(.swiper-slide-active){
		transform: scale(0.8);
	}

</style>