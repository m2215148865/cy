<template>
	<div class="Foods">
		<img src="@/assets/img/Impression/bg@2x01.jpg">
		<img src="@/assets/img/Impression/bg@2x02.jpg">
		<img src="@/assets/img/Impression/bg@2x03.jpg">
		<ul class="main">
			<li v-for="item in $store.getters.FoodsList" :key="item.id">
				<div class="title">
					<h1>{{ item.title }}</h1>
					<img :src="item.svg_url">
				</div>
				<p>{{ item.description }}</p>
				<router-link :to="'/ImpressionInfo/' + item.id" tag="button" class="mock">查看更多 ></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			FoodsList: []
		}
	},
	created(){
		this.$store.dispatch('DataFoodsList');
	}
}
</script>

<style lang="scss" scoped>
	.Foods{
		> img{
			margin-top: -1px;
		}
		.main{
			padding-top: 102px;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			li{
				display: flex;
				flex-direction: column;
				.title{
					display: flex;
					align-items: center;
					h1{
						font-size: 50px;
						color: #DFBB65;
					}
					
				}
				p{
					width: 269px;
					color: #fff;
					font-size: 30px;
					line-height: 36px;
					opacity: 0.7;
					margin-top: 20px;
					margin-bottom: 34px;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.mock{
					width:200px;
					height:56px;
					border:2px solid rgba(85,217,181,1);
					background: transparent;
					color: #55D9B5;
					font-size: 26px;
				}
				&:nth-of-type(1){
					margin-left: 413px;
					margin-top: 100px;
					img{
						width: 50px;
						height: 50px;
						margin-left: 10px;
					}
				}
				&:nth-of-type(2){
					margin-left: 64px;
					margin-top: 137px;
					img{
						width: 63px;
						height: 48px;
						margin-right: 10px;
					}
				}
				&:nth-of-type(3){
					margin-left: 400px;
					margin-top: 200px;
					img{
						width: 49px;
						height: 49px;
						margin-left: 10px;
					}
				}
				&:nth-of-type(4){
					margin-left: 84px;
					margin-top: 240px;
					img{
						width: 44px;
						height: 48px;
						margin-right: 10px;
					}
				}
				&:nth-of-type(5){
					margin-left: 413px;
					margin-top: 260px;
					img{
						width: 84px;
						height: 48px;
						margin-left: 10px;
					}
				}
				&:nth-of-type(6){
					margin-left: 104px;
					margin-top: 200px;
					img{
						width: 37px;
						height: 59px;
						margin-right: 10px;
					}
				}
				&:nth-of-type(7){
					margin-left: 413px;
					margin-top: 200px;
					img{
						width: 36px;
						height: 50px;
						margin-left: 10px;
					}
				}
				&:nth-of-type(8){
					margin-left: 104px;
					margin-top: 180px;
					img{
						width: 49px;
						height: 48px;
						margin-right: 10px;
					}
				}
				&:nth-of-type(9){
					margin-left: 418px;
					margin-top: 160px;
					img{
						width: 67px;
						height: 48px;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
