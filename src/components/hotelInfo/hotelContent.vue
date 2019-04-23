<template>
	<div class="hotelContent">
		<div class="convenient">
			<h1>便利服务</h1>
			<ul class="list">
				<li v-for="(item,index) in facilitate" :key="index">
					<img :src="list[item].img_url">
					<span>{{ list[item].name }}</span>
				</li>
			</ul>
		</div>
		<div class="matching">
			<h1>配套服务</h1>
			<div class="pic">
				<img :src="img_url">
			</div>
			<p>{{ matchingText }}</p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			list: [
				{
					img_url: require("@/assets/svg/hotelContent/wifi.svg"),
					name: "WIFI"
				},
				{
					img_url: require("@/assets/svg/hotelContent/alarmClock.svg"),
					name: "叫醒"
				},
				{
					img_url: require("@/assets/svg/hotelContent/Washing.svg"),
					name: "洗衣机"
				},
				{
					img_url: require("@/assets/svg/hotelContent/breakfast.svg"),
					name: "早餐"
				},
				{
					img_url: require("@/assets/svg/hotelContent/Parking.svg"),
					name: "停车场"
				},
				{
					img_url: require("@/assets/svg/hotelContent/airConditioner.svg"),
					name: "空调"
				}
			]
		}
	},
	props: [
		"matchingText",
		"facilitate",
		"img_url"
	]
}
</script>

<style lang="scss" scoped>
	.hotelContent{
		margin-top: 110px;
		.convenient{
			padding: 0 30px;
			margin-bottom: 130px;
			h1{
				font-size: 34px;
				color: #333;
			}
			.list{
				margin-top: 46px;
				display: flex;
				li{
					width: (100%)/6;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					span{
						font-size: 20px;
						color: #333;
						margin-top: 10px;
					}
					&:nth-of-type(1){
						img{
							width: 56px;
							height: 40px;
						}
					}
					&:nth-of-type(2){
						img{
							width: 40px;
							height: 40px;
						}
					}
					&:nth-of-type(3){
						img{
							width: 32px;
							height: 40px;
						}
					}
					&:nth-of-type(4){
						img{
							width: 42px;
							height: 40px;
						}
					}
					&:nth-of-type(5){
						img{
							width: 40px;
							height: 40px;
						}
					}
					&:nth-of-type(6){
						img{
							width: 37px;
							height: 40px;
						}
					}
				}
			}
		}
		.matching{
			padding: 0 30px;
			h1{
				color: #333;
				font-size: 34px;
			}
			.pic{
				width: 100%;
				height: 380px;
				background: #0cf;
				border-radius: 10px;
				margin-top: 32px;
			}
			p{
				font-size:32px;
				color: #666;
				line-height:48px;
				margin-top: 32px;
				margin-bottom: 70px;
			}
		}
	}
</style>
