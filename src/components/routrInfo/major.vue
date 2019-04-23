<template>
	<div class="box">
		<div
		class="major"
		v-for="(item,i) in list"
		:id="'mao' + (i+1)"
		:key="i"
		>
			<h1>第{{i+1}}站</h1>
			<div class="title">
				<p>{{ item.placeName }}</p>
				<div>
					<img src="@/assets/svg/SecondIndex/vtour.svg">
					查看全景
				</div>
			</div>
			<p class="text">{{ item.text }}</p>
			<slider :sliderList="item.images"></slider>
			<ul class="SpeedOfProgress">
				<li>
					<div>
						<div>
							<img src="@/assets/svg/SecondIndex/Trip.svg">
							行程
						</div>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
					</div>
				</li>
				<li>
					<div>
						<div>
							<img src="@/assets/svg/SecondIndex/repast_active.svg">
							行程
						</div>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
					</div>
				</li>
				<li>
					<div>
						<div>
							<img src="@/assets/svg/SecondIndex/hotel_active.svg">
							行程
						</div>
						<p>
							文案文案文案文案文案文案文案文案文案文案文案文案文案文案
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import slider from "@/components/routrInfo/slider.vue";
import Swiper from "swiper";
import { routrInfoSliderList } from "@/api/index.js";
export default{
	data(){
		return {
			sliderList: []
		}
	},
	mounted(){
		var mySwiper = new Swiper ('.swiper-container', {
			slidesPerView : 5,
			slidesOffsetAfter : 30,
			freeMode: true
		});
	},
	components: {
		slider
	},
	created(){
		routrInfoSliderList().then(res => {
			this.sliderList = res.data.data;
		});
	},
	props: ["list"]
}
</script>

<style lang="scss" scoped>
	.box{
		.major{
			margin-top: 56px;
			h1{
				width: 140px;
				height: 58px;
				background: #0BCFCA;
				font-size: 34px;
				color: #fff;
				text-align: center;
				line-height: 58px;
				position: relative;
				&::before{
					content: "";
					width: 24px;
					height: 24px;
					background: #0BCFCA;
					position: absolute;
					left: -42px;
					top: 17px;
					border-radius: 50%;
				}
			}

			.title{
				display: flex;
				justify-content: space-between;
				margin-top: 33px;
				padding-right: 30px;
				align-items: center;
				p{
					width: 314px;
					height: 58px;
					background: rgba(11,207,202,.1);
					text-align: center;
					line-height: 58px;
					color: #333;
				}
				div{
					color: #0BCFCA;
					font-size: 30px;
					display: flex;
					align-items: center;
					img{
						width: 42px;
						height: 30px;
						margin-right: 10px;
						display: block;
					}
				}
			}
			.text{
				margin-top: 26px;
				margin-right: 33px;
				color: #666;
				font-size: 32px;
			}
			.swiper-container2{
				width: 648px;
				height: 353px;
				background: #0cf;
				border-radius: 10px;
				li{
					width: 648px;
					height: 353px;
					text-align: center;
					line-height: 353px;
					font-size: 100px;
					color: #fff;
				}
			}
			.SpeedOfProgress{
				padding-right: 33px;
				margin-top: 48px;
				li{
					margin-bottom: 32px;
					>div{
						>div{
							color: #0BCFCA;
							font-size: 28px;
							font-weight: 600;
							display: flex;
							align-items: center;
							img{
								width: 30px;
								height: 30px;
								margin-right: 10px;
							}
						}
						p{
							font-size: 32px;
							color: #666;
							margin-top: 25px;
						}
					}
				}
			}
			&:first-of-type{
				h1{
					&::after{
						content: "";
						width: 24px;
						height: 24px;
						background: #fff;
						position: absolute;
						left: -40px;
						top: -7px;
					}
				}
			}
		}
	}
</style>