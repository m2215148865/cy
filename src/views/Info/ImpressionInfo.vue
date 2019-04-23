<template>
	<div class="ImpressionInfo">
		<div class="topPic">
			<img :src="InfoData.bj_url">
			<div class="content">
				<back></back>
				<div class="titleText">
					<div class="title">
						<h1>{{ InfoData.title }}</h1>
						<img src="@/assets/svg/Impression/麻花.svg" v-if="id <= 9">
					</div>
					<p>{{ InfoData.description }}</p>
				</div>
			</div>
		</div>
		<textPic :textPic="InfoData.textPic"></textPic>
	</div>
</template>

<script>
import back from "@/components/back.vue";
import textPic from "@/components/textPic.vue";
import {mapActions, mapState,mapGetters} from 'vuex';
export default{
	data(){
		return {
			id: this.$route.params.id,
			InfoData:{},
			textPic: {}
		}
	},
	components: {
		back,
		textPic
	},
	computed: {
		
	},
	created(){
		let arr = this.$store.getters.ImpressionInfoInfo;
		console.log(arr)
		let arrLength = this.$store.getters.ImpressionInfoInfo.length;
		for(let i = 0; i < arrLength; i++){
			if(arr[i].id == this.id){
				this.InfoData = arr[i];
				break;
			}
		}
		if(JSON.stringify(this.InfoData) == "{}"){
			this.InfoData = JSON.parse(localStorage.getItem("obj"));
		}else{
			localStorage.setItem("obj",JSON.stringify(this.InfoData));
		}
		this.textPic.content1 = this.InfoData.content;
		this.textPic.images = this.InfoData.images;
	}
}
</script>

<style lang="scss" scoped>
.ImpressionInfo{
	margin-bottom: 80px;
	.topPic{
		width: 100%;
		height: 440px;
		position: relative;
		margin-bottom: 44px;
		margin-bottom: 20px;
		.content{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			.titleText{
				position: absolute;
				left: 30px;
				bottom: 64px;
				.title{
					display: flex;
					align-items: center;
					h1{
						font-size: 68px;
						color: #DFBB65;
					}
					img{
						width: 50px;
						height: 50px;
						margin-left: 30px;
					}
				}
				p{
					width: 335px;
					color: #fff;
					font-size: 26px;
					opacity: 0.7;
				}
			}
		}
	}
}
</style>
