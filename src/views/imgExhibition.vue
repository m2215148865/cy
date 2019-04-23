<template>
	<div class="imgExhibition">
		<div class="back" @click="back">
			<img src="@/assets/svg/public/back_black.svg" alt="">
		</div>
		<div class="box" v-for="(item,index) in dataList" :key="index">
			{{ item.name }}
			<div class="pic">
				<vue-preview
				:list="item.images"
				:thumbImageStyle="cssObj"
				:tapToClose="true"
				@close="closeHandler"
				@destroy="destroyHandler"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { imgExhibitionList } from "@/api/index.js";
export default{
	data(){
		return {
			cssObj: {width: 160/75 + 'rem', height: 160/75 + 'rem'},
			dataList:[],
			name: this.$route.params.urlName,
		}
	},
	methods: {
		// 即将关闭的时候，调用这个处理函数
		closeHandler() {
			console.log('closeHandler')
		},
		// 完全关闭之后，调用这个函数清理资源
		destroyHandler() {
			console.log('destroyHandler')
		},
		back(){
			this.$router.go(-1)
		}
	},
	created(){
		console.log(this.$store.getters.imgExhibition.scenicInfo);
		let arr = this.name.split("&");
		let str = arr[0];
		console.log(arr);
		if(arr[0] == "ImpressionInfo"){
			this.$store.getters.imgExhibition.ImpressionInfo.forEach(item => {
				if(item.id == arr[1]){
					this.dataList = item.images;
				}
			})
		}else if(arr[0] == "scenicInfo"){
			this.$store.getters.imgExhibition.scenicInfo.forEach(item => {
				if(item.id == arr[1]){
					this.dataList = item.images;
				}
			})
		}
		if(JSON.stringify(this.dataList) == "[]"){
			this.dataList = JSON.parse(localStorage.getItem("images"));
		}else{
			localStorage.setItem("images",JSON.stringify(this.dataList));
		}
		console.log(this.dataList);
	}
}
</script>

<style lang="scss" scoped>
	.back{
		width: 24px;
		height: 40px;
		transform: rotate(180deg);
	}


	.imgExhibition{
		background: #000;
		overflow: hidden;
		padding-left: 30px;
		padding-bottom: 20px;
		padding-top: 30px;
		width: 100%;
		height: auto;
		position: absolute;
		left: 0;
		top: 0;
		> i{
			display: block;
			color: #fff;
			font-family: "宋体";
			width: 24px;
			height: 40px;
			font-size: 50px;
			font-weight: 600;
			margin: 40px 30px;
		}
		.box{
			color: #fff;
			font-size: 34px;
			margin-top: 44px;
			overflow: hidden;
			&:first-of-type{
				margin-top: 0;
			}
			.pic{
				margin-top: 8px;
				/deep/>div>div{
					overflow: hidden;
					img{
						float: left;
						width: 160px;
						height: 160px;
						margin: 0 8px;
						margin-top: 16px;
						display: block;
						&:first-of-type{
							margin-left: 0;
						}
						&:nth-of-type(5n + 5){
							margin-left: 0;
						}
					}
				}
			}
			
			/deep/ .pswp__zoom-wrap{
				img{
					margin: 0;
				}
			}
		}
	}
</style>
