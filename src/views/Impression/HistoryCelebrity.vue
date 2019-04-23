<template>
	<div class="HistoryCelebrity">
		<img src="@/assets/img/Impression/history_bg01.jpg">
		<img src="@/assets/img/Impression/history_bg02.jpg">
		<ul class="mian">
			<router-link
			v-for="item in $store.getters.HistoryCelebrityList"
			:key="item.id"
			:to="'/ImpressionInfo/' + item.id"
			tag="li"
			>
				<img :src="item.img_url">
				<div class="text">{{ item.title }}</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import { HistoryCelebrityList } from "@/api/index.js";
export default{
	data(){
		return {
			list: []
		}
	},
	created(){
		HistoryCelebrityList().then(res => {
			this.list = res.data.data
		})
		this.$store.dispatch('HistoryCelebrityList');
	}
}
</script>

<style lang="scss" scoped>
	.mian{
		padding-top: 102px;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		li{
			width: 250px;
			height: 250px;
			position: absolute;
			
			img{
				width: 100%;
				height: 100%;
			}
			.text{
				width: 270px;
				height: 50px;
				background: url("../../assets/img/Impression/history_item_bg.png");
				background-size: 100% 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				text-align: center;
				line-height: 50px;
				font-size: 26px;
				color: #333;
			}
			&:nth-of-type(1){
				left: 140px;
				top: 86px;
			}
			&:nth-of-type(2){
				left: 476px;
				top: 248px;
			}
			&:nth-of-type(3){
				left: 167px;
				top: 470px;
			}
			&:nth-of-type(4){
				left: 421px;
				top: 764px;
			}
			&:nth-of-type(5){
				left: 134px;
				top: 987px;
			}
			&:nth-of-type(6){
				left: 12px;
				top: 1295px;
			}
			&:nth-of-type(7){
				left: 387px;
				top: 1466px;
			}
			&:nth-of-type(8){
				left: 100px;
				top: 1760px;
			}
			&:nth-of-type(9){
				left: 366px;
				top: 2018px;
			}
			&:nth-of-type(10){
				left: 94px;
				top: 2270px;
			}
		}
	}
</style>
