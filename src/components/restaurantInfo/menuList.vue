<template>
	<div class="main">
		<h1>菜品介绍</h1>
		<ul class="list">
			<li
			v-for="(item,index) in food"
			:key="index"
			>
				<div class="pic">
					<img :src="item.img_url">
				</div>
				<div class="introduce">
					<h2>{{ item.name }}</h2>
					<p>{{ item.introduce }}</p>
					<div class="price">
						<classification :label="item.label" :Info="Info"></classification>
						<p>￥<span>{{ item.price }}</span></p>
					</div>
				</div>
			</li>
		</ul>
		<span class="open" @click="whole" v-if="this.food.length > 3">查看全部6个菜品<img src="@/assets/svg/SecondIndex/back-bottom.svg"></span>
	</div>
</template>

<script>
import classification from "@/components/classification.vue";

export default{
	data(){
		return {
			Info: "howToPlayContent",
			list: []
		}
	},
	components: {
		classification
	},
	methods: {
		whole(){
			this.list = this.food;
		}
	},
	props: [
		"food"
	],
	created(){
		if(this.food.length > 3){
			for(let i = 0; i < 3; i++){
				this.list.push(this.food[i]);
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.main{
		padding-left: 30px;
		padding-right: 27px;
		margin-bottom: 40px;
		h1{
			font-family:"PingFang";
			font-size: 34px;
			color: #333;
		}
		.list{
			li{
				height: 180px;
				position: relative;
				margin-top: 40px;
				.pic{
					width: 180px;
					height: 180px;
					background: #0cf;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.introduce{
					position: absolute;
					left: 0px;
					top: 0px;
					width: 100%;
					padding-left: 180px;
					display: flex;
					flex-direction: column;
					margin-left: 20px;
					h2{
						font-size: 34px;
						color: #333;
						font-family: "PingFang";
					}
					p{
						color: #999;
						font-size: 26px;
						overflow: hidden;
						white-space: nowrap;
					}
					.price{
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 50px;
						.classification{
							display: flex;
							span{
								padding: 6px 13px;
								border: 2px solid #00C3BE;
								color: #00C3BE;
								border-radius: 4px;
							}
						}
						p{
							font-size: 24px;
							color: #FFB023;
							span{
								font-size: 36px;
							}
						}
					}
				}
			}
		}
		.open{
			display: block;
			align-items: center;
			color: #00C3BE;
			width: 100%;
			text-align: center;
			margin-top: 20px;
			img{
				display: inline-block;
				width: 24px;
				height: 14px;
				transform: rotate(90deg);
				margin-left: 10px;
			}
		}
	}
</style>