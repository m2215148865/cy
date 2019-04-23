<template>
	<div class="routrInfoSwiper">
		<div class="swiper-container">
			<ul class="swiper-wrapper">
				<li
				:class="['swiper-slide',{active: active==index}]"
				v-for="(item,index) in listLength"
				:key="index"
				@click="selected(index)"
				><a :href="'#mao' + (index+1)">D{{ item }}</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default{
	data(){
		return {
			list: [1,2,3,4,5,6,7,8],
			active: ""
		}
	},
	mounted(){
		setTimeout(() => {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 5.5,
				spaceBetween: 0,
				slidesOffsetBefore : 0,
				observer: true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents: true,//修改swiper的父元素时，自动初始化swiper
			});
		},300);
	},
	methods: {
		selected(index){
			this.active = index;
		}
	},
	props: [
		"listLength"
	]
	
}
</script>

<style lang="scss" scoped>
.routrInfoSwiper{
	width:100%;
	height:100px;
	background:rgba(11,207,202,.1);
	.swiper-container{
		width: 100%;
		height: 100%;
		padding-left: 30px;
		.swiper-slide{
			height: 100px;
			line-height: 100px;
			a{
				display: block;
				width: 66px;
				height: 66px;
				color: #00C3BE;
				margin: 17px auto;
				text-align: center;
				line-height: 66px;
				border-radius: 50%;
			}
			&.active{
				a{
					background: #0BCFCA;
					color: #fff;
				}
			}
		}
	}
}
</style>
