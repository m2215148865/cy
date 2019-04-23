<template>
	<div class="routeStrategy">
		<ul class="list">
			<router-link
			tag="li"
			:to="'/routrInfo/' + item.id"
			v-for="item in $store.getters.routeStrategyList"
			:key="item.id"
			>
				<div class="pic">
					<div class="pic_img">
						<img :src="item.cover">
					</div>
					<div class="pic_text">
						<div class="left">
							<img src="@/assets/svg/SecondIndex/area_white.svg">
							<p>{{ item.position }}</p>
						</div>
						<span><b>{{ item.price }}</b>元/人</span>
					</div>
				</div>
				<div class="text">
					<span>{{ item.day }}天</span>
					<h3>{{ item.title }}</h3>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import { routeStrategyList } from "@/api/index.js";
export default{
	data(){
		return {
			dataList: []
		}
	},
	created(){
		routeStrategyList().then(res => {
			this.dataList = res.data.data;
		});
		this.$store.dispatch('routeStrategyList');
		
	}
}
</script>

<style lang="scss" scoped>
.routeStrategy{
	background: #F5F7FA;
	.list{
		padding: 40px 30px 0;
		li{
			margin-bottom: 60px;
			.pic{
				width: 690px;
				height: 344px;
				border-radius: 10px;
				position: relative;
				.pic_img{
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					img{
						width: 100%;
						height: 100%;
						border-radius: 10px;
					}
				}
				.pic_text{
					position: absolute;
					left: 0px;
					bottom: 20px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					padding: 0 20px;
					.left{
						display: flex;	
						align-items: center;
						img{
							width: 20px;
							height: 24px;
						}
						p{
							color: #F9F3E7;
							font-size: 28px;
							margin-left: 10px;
						}
					}
					span{
						color: #F9F3E7;
						font-size: 28px;
						b{
							color: #FBC71F;
						}
					}
				}
			}
			.text{
				display: flex;
				margin-top: 32px;
				align-items: center;
				span{
					display: block;
					width:57px;
					height:36px;
					border:2px solid #00C3BE;
					border-radius:2px;
					box-sizing: border-box;
					text-align: center;
					font-size: 24px;
					color: #00C3BE;
				}
				h3{
					color: #333;
					font-size: 34px;
					margin-left: 8px;
				}
			}
		}
	}
}
</style>