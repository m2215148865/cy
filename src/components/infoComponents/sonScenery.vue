<template>
	<div class="sonScenery" v-if="sonScenery.length == 0">
		<h2>子景观</h2>
		<ul class="list">
			<li v-for="(item,index) in sonScenery" :key="index">
				<div class="pic">
					<img :src="item.src">
				</div>
				<span v-if="item.price==''">{{ item.price }}</span>
				<span :class="item.price == '免费'? '' : 'pricre' " v-if="item.price==''"><b v-if="item.price != '免费'">￥</b>{{ item.price }}</span>
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<p class="open" v-show="falg" @click="open">查看{{ this.list.length }}个全部子景观<img src="@/assets/svg/SecondIndex/back-bottom.svg"></p>
	</div>
</template>

<script>
export default{
	data(){
		return {
			list: [],
			dataList: [],
			falg: true
		}
	},
	created(){
		if(this.sonScenery.length < 6){
			this.falg = false;
		}
	},
	methods: {
		open(){
			this.dataList = this.list;
			this.falg = false;
		}
	},
	props: [
		"sonScenery"
	]
}
</script>

<style lang="scss" scoped>
	.sonScenery{
		padding: 0 30px;
		margin-top: 86px;
		margin-bottom: 60px;
		h2{
			color: #333;
			font-size: 34px;
		}
		.list{
			margin-top: 30px;
			overflow: hidden;
			li{
				width: 214px;
				border-radius: 4px;
				float: left;
				margin-right: 24px;
				position: relative;
				overflow: hidden;
				margin-bottom: 39px;
				&:nth-of-type(3n+3){
					margin-right: 0;
				}
				span{
					display: block;
					width:90px;
					height:44px;
					background:rgba(255,255,255,1);
					opacity:0.85;
					border-radius:10px 0px 0px 0px;
					position: absolute;
					right: 0;
					top: 170px;
					font-size: 28px;
					text-align: center;
					line-height: 44px;
					color: #0BCFCA;
					&.pricre{
						color: #FFB023;
						font-size: 30px;
						b{
							font-size: 20px;
						}
					}
				}
				.pic{
					width: 100%;
					height: 214px;
					/deep/img{
						height: 100%;
					}
				}
				p{
					margin-top: 20px;
					font-size:30px;
					color:rgba(51,51,51,1);
					line-height:38px
				}
			}
		}
		.open{
			align-items: center;
			color: #00C3BE;
			width: 100%;
			text-align: center;
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