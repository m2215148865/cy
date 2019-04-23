<template>
	<div>
		<div class="swiper-container2">
			<ul class="swiper-wrapper">
				<li
				class="swiper-slide"
				v-for="(item,index) in sliderList"
				:key="index"
				>
				<img :src="item">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default{
	data(){
		return {
			
		}
	},
	methods: {
		
	},
	mounted(){
		const mySwiper = new Swiper ('.swiper-container2', {
			observer: true,//修改swiper自己或子元素时，自动初始化swiper
		    observeParents: true,//修改swiper的父元素时，自动初始化swiper
			loop: true
		});
	},
	props: [
		"sliderList",
	],
	created(){
	}
}
</script>

<style lang="scss" scoped>
	.swiper-container2{
		width: 648px;
		height: 353px;
		border-radius: 10px;
		margin-top: 25px;
		overflow: hidden;
		li{
			width: 648px;
			height: 353px;
			border-radius: 10px;
			img{
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
	}
</style>