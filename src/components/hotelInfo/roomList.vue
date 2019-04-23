<template>
	<div class="rommList">
		<div class="swiper-slide">
			<div class="pic">
				<img :src="list.images[0]">
				<p>10+</p>
				<div v-if="false">
					<img src="@/assets/svg/vtour2.svg">
					<span>查看全景</span>
				</div>
			</div>
			<div class="text">
				<div class="left">
					<h1>{{ list.name }}</h1>
					<classification :label="list.label" :Info="Info"></classification>
				</div>
				<button class="right"><span>￥</span><b>{{ list.price }}</b><i>预定</i></button>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
import classification from "@/components/classification.vue";
export default{
	data(){
		return {
			label: [
				{
					name: "5星",
					sign: 0
				},
				{
					name: "标签名",
					sign: 1
				},
				{
					name: "标签名",
					sign: 1
				}
			],
			Info: "howToPlayContent"
		}
	},
	mounted(){
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 1.1,
			spaceBetween: 20,
		});
	},
	components:{
		classification
	},
	props: ["list"]
}
</script>

<style lang="scss" scoped>
	.rommList{
		padding: 0 30px;
		margin-top: 40px;
		margin-bottom: 78px;
			.swiper-slide{
				.pic{
					width: 100%;
					height: 400px;
					background: #0cf;
					border-radius: 10px;
					position: relative;
					img{
						height: 100%;
					}
					p{
						width:120px;
						height:104px;
						background:rgba(0,0,0,.4);
						border-radius:0px 10px 0px 10px;
						position: absolute;
						right: 0;
						top: 0;
						color: #fff;
						text-align: center;
						line-height: 104px;
						font-size: 34px;
					}
					>div{
						width:192px;
						height:76px;
						background:rgba(0,0,0,.4);
						border-radius:0px 10px 0px 10px;
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						img{
							width: 42px;
							height: 30px;
						}
						span{
							color: #fff;
							font-size: 26px;
						}
					}
				}
				.text{
					width: 100%;
					margin-top: 30px;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 100%;
					height: auto;
					overflow: hidden;
					.left{
						h1{
							font-size: 34px;
							color: #333;
							margin-bottom: 16px;
						}
					}
					.right{
						width:180px;
						height:70px;
						background: #0BCFCA;
						border-radius:2px;
						color: #fff;
						font-size: 30px;
						span{
							font-size: 18px;
						}
						i{
							margin-left: 10px;
						}
					}
				}
			}
	}
</style>
