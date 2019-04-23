<template>
	<div class="InfoTop">
		<div class="back" @click="back()">
			<img src="@/assets/svg/public/back_black.svg">
		</div>
		<h2 class="title">{{ header.title1 }}</h2>
		<h1 class="title1">{{ header.title }}</h1>
		<div class="price">
			<classification :Info="Info" :label="header.label"></classification>
			<p v-if="header.price"><i>¥</i><span>100</span><b>起</b></p>
		</div>
		<ul class="list">
			<li v-for="(item,index) in header.basicSituation" :key="index">
				<div>
					<img :src="item.svg_url1">
					<p>{{ item.text }}</p>
				</div>
				<a :href="!item.state? 'tel:' + header.phone : 'javascript:;'">
					<img :src="item.svg_url2" :class="[!item.state? 'teshu' : '']">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import classification from "@/components/classification.vue";
export default{
	data(){
		return {
			Info: "Info"
		}
	},
	components: {
		classification
	},
	methods: {
		back(){
			this.$router.go(-1);
		},
		back1(url){
			this.$router.push(url);
		}
	},
	props: [
		"header"
	]
}
</script>

<style lang="scss" scoped>
	.InfoTop{
		.back{
			width: 24px;
			height: 40px;
			position: absolute;
			left: 30px;
			top: 40px;
			z-index: 999;
			transform: rotate(180deg);
		}
		.title{
			width: 100%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			position: absolute;
			left: 0px;
			top: 0px;
			padding-top: 40px;
			font-size: 34px;
			color: #333;
		}
		.title1{
			width: 100%;
			padding-left: 30px;
			padding-right: 66px;
			font-size: 40px;
			color: #333;
			line-height:52px;
			margin-top: 120px;
			font-weight: 600;
		}
		.price{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 25px;
			padding: 0 30px;
			p{
				color: #FFBB40;
				display: flex;
				align-items: flex-end;
				i{
					font-size: 18px;
				}
				span{
					font-size: 36px;
					margin: 0 2px;
				}
				b{
					color: #999;
					font-size: 20px;
				}
			}
		}
		.list{
			margin-top: 46px;
			padding: 0 30px;
			li{
				padding-bottom: 36px;
				border-bottom: 1px solid #ccc;
				display: flex;
				font-size: 28px;
				align-items: center;
				justify-content: space-between;
				margin-bottom:40px;
				div{
					display: flex;
					align-items: center;
					img{
						width: 20px;
						height: 24px;
					}
					p{
						margin-left: 13px;
						font-size: 28px;
						color: #333;
					}
				}
				a{
					img{
						width: 10px;
						height: 18px;
					}
					.teshu{
						width: 33px;
						height: 37px;
					}
				}
			}
		}
	}
</style>
