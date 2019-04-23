<template>
	<div class="hotelInfoSwiper">
		<h1>房型介绍</h1>
		<div class="swiper">
			<div class="swiper-wrapper">
				<div
				:class="['swiper-slide',{active: active==index}]"
				v-for="(item,index) in list"
				:key="item.id"
				@click="selected(index,item.id)"
				>
				{{ item.conditionName }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default{
	data(){
		return {
			active: ""
		}
	},
	mounted() {
		var swiper = new Swiper('.swiper', {
			slidesPerView: 3.5,
			spaceBetween: 16,
		});
	},
	methods: {
		selected(index,id){
			this.active = index;
			this.$emit('fn',id)
		}
	},
	props: [
		"list"
	]
}
</script>

<style lang="scss" scoped>
	.hotelInfoSwiper{
		padding: 0 30px;
		margin-top: 36px;
		width: 100%;
		overflow: hidden;
		h1{
			font-size: 34px;
			color: #333;
			margin-bottom: 43px;
		}
		.swiper{
			.swiper-wrapper{
				.swiper-slide{
					width: 100%;
					height: 54px;
					text-align: center;
					line-height: 54px;
					font-size: 28px;
					background:rgba(0,191,202,.1);
					color: #00C3BE;
					box-sizing: border-box;
					text-align: center;
					&.active{
						background: #00BFCA;
						color: #fff;
					}
				}
			}
		}
	}
</style>
