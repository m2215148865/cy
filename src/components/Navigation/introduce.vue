<template>
	<div class="introduce" v-if="mapBottom">
		<div class="box">
			<img :src="mapLeftobj.src">
			<div>
				<div class="content">
					<h1>{{ mapLeftobj.title }}</h1>
					<classification :label="mapLeftobj.label" :Info="'howToPlayContent'"></classification>
					<div class="bottom">
						<button>导航</button>
						<p>查看详情<img src="@/assets/svg/public/businessdetails.svg"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import classification from "@/components/classification.vue";
export default{
	data(){
		return {
			label: [
				{
					labelName: "5星",
					state: 0
				}
			]
		}
	},
	components: {
		classification
	},
	props: ["mapLeftobj","mapBottom"],
	created(){
		
	}
}
</script>

<style lang="scss" scoped>
	.introduce{
		width: 100%;
		height: 260px;
		padding: 0 30px;
		position: absolute;
		left: 0;
		bottom: 46px;
		z-index: 999;
		.box{
			width: 100%;
			height: 100%;
			background: #fff;
			border-radius: 10px;
			display: flex;
			padding: 40px 25px;
			align-items: center;
			position: relative;
			img{
				width: 180px;
				height: 180px;
			}
			>div{
				width: 87%;
				height: 220px;
				position: absolute;
				left: 54px;
				top: 40px;
				box-sizing: border-box;
				padding-left: 180px;
				.content{
					width: 100%;
					h1{
						font-size:40px;
						font-weight:bold;
						color:rgba(51,51,51,1);
						margin-bottom: 22px;
					}
					.bottom{
						width: 100%;
						display: flex;
						margin-top: 38px;
						justify-content: space-between;
						align-items: center;
						button{
							width:108px;
							height:46px;
							background:rgba(11,207,202,.15);
							border-radius:4px;
							font-size: 25px;
							color: #0BCFCA;
						}
						p{
							color: #0BCFCA;
							display: flex;
							align-items: center;
							img{
								width: 52px;
								height: 9px;
								margin-left: 10px;
							}
						}
					}
				}
			}
		}
	}
</style>
