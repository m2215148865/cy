<template>
	<div class="mock">
		<div class="title">
			<h1>景区名/场景名场景名...</h1>
			<div>
				<img src="@/assets/svg/SecondIndex/Music.svg" class="music">
				<img src="@/assets/svg/SecondIndex/commentary.svg" class="commentary">
			</div>
		</div>
		<div class="bottom">
			<classification></classification>
			<router-link :to="'/scenicInfo/' + id" class="details">
				<span>查看详情</span>
				<img src="@/assets/svg/public/businessdetails.svg" alt="">
			</router-link>
		</div>
	</div>
</template>

<script>
import classification from "@/components/classification.vue";
export default{
	data(){
		return {
			id: this.$route.params.id
		}
	},
	components: {
		classification
	},
	created(){
		console.log();
	}
}
</script>

<style lang="scss" scoped>
	.title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
		h1{
			color: #fff;
			font-size: 50px;
			width: 522px;
		}
		div{
			display: flex;
			padding-right: 36px;
			.music{
				width: 28px;
				height: 32px;
			}
			.commentary{
				width: 24px;
				height: 30px;
				margin-left: 50px;
			}
		}
	}
	.bottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 44px;
		.details{
			display: flex;
			color: #0BCFCA;
			align-items: center;
			span{
				font-size: 26px;
			}
			img{
				width: 52px;
				margin-left: 20px;
				margin-right: 30px;
			}
		}
	}
</style>
