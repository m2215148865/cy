<template>
	<div class="trip">
		<p class="introduce">崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍崇阳介绍</p>
		<div class="route">
			<h2 class="title">
				<p>抵达崇阳</p>
			</h2>
			<div class="title2">
				<img src="@/assets/svg/Trip/High-Speed.svg">
				<span>高铁</span>
			</div>
			<ul class="list">
				<li>
					<p>· 武汉站—咸宁北 ：06:22-20:59</p>
					<span>约40趟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行时间24分钟</span>
				</li>
				<li>
					<p>· 武汉站—咸宁北 ：06:22-20:59</p>
					<span>约40趟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行时间24分钟</span>
				</li>
			</ul>
			<div class="title2 titletow">
				<img src="@/assets/svg/Trip/Highway.svg">
				<span>公路</span>
			</div>
			<p class="text">武汉付家坡客运站、弘基客运站、金家墩客运站均有车直达崇阳。</p>
		</div>
		<div class="route route2">
			<h2 class="title">
				<p>使用电话</p>
			</h2>
			<ul class="list">
				<li>崇阳县区号：0000</li>
				<li>崇阳县区号：0000</li>
				<li>崇阳县区号：0000</li>
				<li>崇阳县区号：0000</li>
				<li>崇阳县区号：0000</li>
				<li>崇阳县区号：0000</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style lang="scss" scoped>
	.trip{
		margin-bottom: 40px;
		padding: 0 34px;
		.introduce{
			font-family:HiraginoSansGB-W3;
			color: #666;
			font-size: 32px;
		}
		.route{
			margin-top: 54px;
			.title{
				width: 253px;
				height: 6px;
				background: #0BCFCA;
				margin: 0 auto;
				position: relative;
				p{
					width: 173px;
					height: 32px;
					font-size: 34px;
					color: #0BCFCA;
					text-align: center;
					line-height: 32px;
					background: #fff;
					position: absolute;
					left: 40px;
					top: -10px;
					
				}
			}
			.title2{
				display: flex;
				margin-top: 36px;
				img{
					width: 34px;
					height: 40px;
					margin-right: 10px;
				}
				span{
					width: 68px;
					height: 40px;
					background: #0BCFCA;
					color: #fff;
					text-align: center;
					line-height: 40px;
				}
			}
			.list{
				margin-top: 30px;
				li{
					margin-bottom: 34px;
					font-family:HiraginoSansGB-W3;
					p{
						font-size: 32px;
						color: #666;
					}
					span{
						display: block;
						color: #999;
						font-size: 24px;
						margin-left: 18px;
						margin-top: 10px;
					}
				}
			}
			.titletow{
				margin-top: 80px;
			}
			.text{
				font-size: 32px;
				color: #666;
				margin-top: 30px;
			}
		}
		.route2{
			margin-top: 110px;
			.title{
				margin-bottom: 46px;
			}
			.list{
				li{
					font-size: 32px;
					color: #666;
				}
			}
		}
	}
</style>