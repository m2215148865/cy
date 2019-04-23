<template>
	<div class="index">
		<div class="text">
			<img src="@/assets/img/indextext2.png">
		</div>
		<ul class="list">
			<router-link
			 v-for="item
			 in list" :key="item.id"
			 :to="item.url"
			 tag="li"
			 >
				{{ item.name }}
			 </router-link>
		</ul>
	</div>
</template>

<script>
import { indexList } from "@/api/index.js";
export default{
	data(){
		return {
			list: []
		}
	},
	created(){
		indexList().then(res => {
			this.list = res.data.data;
		})
	}
}
</script>

<style lang="scss" scoped>
	.index{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -10px;
		background-image: url("../assets/img/indexbj.jpg");
		background-size: 100% 100%;
		.text{
			width: 323px;
			height: 413px;
			margin-left: 40px;
			margin-top: 70px;
		}
		.list{
			width: 334px;
			margin: 45px auto 0;
			list-style: none;
			li{
				width: 100%;
				height: 83px;
				background: url("../assets/img/border2.png") no-repeat;
				background-size: 100% 100%;
				text-align: center;
				line-height: 83px;
				color: #fff;
				font-size: 32px;
				margin-bottom: 30px;
			}
		}
	}
</style>
