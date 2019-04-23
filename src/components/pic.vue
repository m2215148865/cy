<template>
	<div class="pic" v-if="images.length">
		<div class="left">
			<img :src="images[0]">
		</div>
		<div class="right">
			<div class="top">
				<img :src="images[1]">
			</div>
			<div class="bot">
				<div class="bot_left">
					<img :src="images[2]">
				</div>
				<div class="bot_right">
					<div class="pic">
						<img :src="images[3]">
					</div>
					<router-link class="content" :to="'/imgExhibition/' + urlName" tag="div">
						<img src="@/assets/svg/public/mock.svg">
						<span>10+</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	props: [
		"images",
		"urlName"
	],
	created(){
	}
}
</script>

<style lang="scss" scoped>
	.pic{
		display: flex;
		.left{
			width: 300px;
			height: 300px;
			background: #0cf;
			border-radius: 10px;
			margin-right: 20px;
		}
		.right{
			.top{
				width: 370px;
				height: 145px;
				background: #0cf;
				border-radius: 10px;
				margin-bottom: 20px;
			}
			.bot{
				display: flex;
				.bot_left{
					width: 215px;
					height: 135px;
					background: #0cf;
					border-radius: 10px;
				}
				.bot_right{
					width: 135px;
					height: 135px;
					border-radius: 10px;
					background: #0cf;
					margin-left: 20px;
					position: relative;
					.pic{
						width: 100%;
						height: 100%;
						/deep/img{
							width: 100%;
							height: 100%;
						}
					}
					.content{
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0px;
						top: 0;
						background: rgba(0,0,0,.3);
						padding-top: 42px;
						display: flex;
						flex-direction: column;
						align-items: center;
						img{
							width: 26px;
							height: 26px;
						}
						span{
							color: #fff;
							font-size: 28px;
						}
					}
				}
			}
		}
		/deep/img{
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
</style>
