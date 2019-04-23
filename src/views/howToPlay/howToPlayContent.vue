<template>
	<ul class="howToPlayContent">
		<router-link
		:to="'/hotelInfo/' + item.id"
		tag="li" v-for="item in $store.getters.howToPlayContentList"
		:key="item.id"
		>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div
					class="swiper-slide"
					v-for="(value,i) in item.images"
					:key="i"
					>
					<img :src="value">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>
			<div class="text">
				<h1>{{ item.title }}</h1>
				<classification :label="item.label" :Info="Info"></classification>
				<div class="positionPrice">
					<div class="left">
						<img src="@/assets/svg/SecondIndex/area.svg">
						<span>{{ item.addr }}</span>
					</div>
					<p>¥<span>{{ item.price }}</span><b>起</b></p>
				</div>
			</div>
		</router-link>
	</ul>
</template>

<script>
import Swiper from "swiper";
import classification from "@/components/classification.vue";
export default{
	data(){
		return {
			Info: "howToPlayContent"
		}
	},
	components: {
		classification
	},
	updated(){
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
				 type: 'custom',
				 renderCustom: function (swiper, current, total) {
					let htmlStr = "";
					for(let i =0; i < total; i++){
						if(i == current - 1){
							htmlStr += '<li class="yuan yuan-active"></li>'
						}else{
							htmlStr += '<li class="yuan"></li>'
						}
					}
					return htmlStr;
				}
			},
			observer:true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true,//修改swiper的父元素时，自动初始化swiper
		});
	},
	created(){
		console.log(this.$store.getters.howToPlayContentList);
		this.$store.dispatch('howToPlayContentList',"酒店");
	},
	props: [
	]
}
</script>

<style lang="scss" scoped>
	.howToPlayContent{
		padding: 0 30px;
		li{
			border-radius: 10px;
			overflow: hidden;
			.swiper-container{
				width: 100%;
				height: 384px;
				.swiper-wrapper{
					>div{
						background: #f00;
						font-size: 200px;
						color: #00f;
						text-align: center;
						line-height: 384px;
						img{
							height: 100%;
						}
					}
				}
			}
		}
		.text{
				margin-top: 30px;
				padding: 0 30px;
				h1{
					font-family:HiraginoSansGB-W3;
					font-size: 34px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.classification{
					display: flex;
					margin-top: 12px;
					li{
						border: 2px solid #0BCFCA;
						color: #0BCFCA;
						border-radius: 4px;
						padding: 6px 13px;
						margin-left: 16px;
						margin-bottom: 0;
						&:first-of-type{
							margin-left: 0;
						}
					}
				}
				.positionPrice{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20px;
					.left{
						display: flex;
						align-items: center;
						img{
							width: 20px;
							height: 24px;
							margin-right: 8px;
						}
						span{
							color: #999;
							font-size: 24px;
						}
					}
					p{
						font-size: 18px;
						display: flex;
						align-items: center;
						color: #FFBB40;
						font-family:HiraginoSansGB-W3;
						span{
							font-size: 36px;
						}
						b{
							color: #999;
						}
					}
				}
			}
	}
	.swiper-pagination-custom{
		bottom: 30px;
		left: 40%;
		/deep/.yuan{
			width: 24px;
			height: 5px;
			background: #fff;
			margin: 0 10px;
			float: left;
			&.yuan-active{
				background: #0BCFCA;
			}
		}
	}
</style>
