<template>
	<div class="textPic">
		<div class="text1" v-if="!textState">
			<p class="text" v-html="textPic.content1"></p>
			<p class="text" v-html="textPic.content2"></p>
		</div>
		<div class="text2" v-if="textState">
			<p v-html="textPic.content3">
				
			</p>
			<span class="open" v-if="falg" @click="whole">显示全文<img src="@/assets/svg/SecondIndex/back-bottom.svg"></span>
		</div>
		<div v-if="textPic.images">
			<pic :images="textPic.images" :urlName="textPic.urlName"></pic>
		</div>
	</div>
</template>

<script>
import pic from "@/components/pic.vue";
import $ from "jquery";
export default{
	data(){
		return {
			falg: true
		}
	},
	components: {
		pic
	},
	props: [
		"textState",
		"textPic"
	],
	methods: {
		whole(){
			$(".text2 p").css("height","auto");
			this.falg = false;
		}
	},
	created(){
	}
	
}
</script>

<style lang="scss" scoped>
	.textPic{
		padding: 0 30px;
		.text1{
			.text{
				font-size: 30px;
				font-family: "微软雅黑";
				color: #666;
				line-height:60px;
				letter-spacing: 3px;
				margin-top: 30px;
				&:last-of-type{
					margin-bottom: 40px;
				}
				/deep/p{
					font-size: 30px;
					font-family: "微软雅黑";
					color: #666;
					line-height:60px;
					letter-spacing: 3px;
					margin-top: 30px;
				}
			}
		}
		.text2{
			margin-bottom: 80px;
			p{
				height:175px;
				font-size:32px;
				overflow: hidden;
				color:rgba(102,102,102,1);
				line-height:48px;
				/deep/p{
					height:175px;
					font-size:32px;
					overflow: hidden;
					color:rgba(102,102,102,1);
					line-height:48px;
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
	}
</style>
