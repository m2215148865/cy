<template>
	<ul class="leftList">
		<li
		v-for="(item,index) in rightList"
		:key="item.id"
		:class="{active: active == index}"
		@click="selected(index)"
		>
			<img :src="active == index? item.img_urlActive : item.img_url">
			<span>{{ item.name }}</span>
		</li>
	</ul>
</template>

<script>
import { countySceneryRight } from "@/api/index.js";
export default{
	data(){
		return {
			rightList: [],
			active: ""
		}
	},
	created(){
		countySceneryRight().then(res => {
			this.rightList = res.data.data;
		});
	},
	methods: {
		selected(index){
			this.active = index;
		}
	}
}
</script>

<style lang="scss" scoped>
	.leftList{
		position: absolute;
		right: 30px;
		bottom: 301px;
		li{
			width: 101px;
			height: 101px;
			background: rgba($color: #000000, $alpha: 0.3);
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 30px;
			img{
				width: 30px;
				height: 30px;
			}
			span{
				font-size: 18px;
				color: #fff;
				margin-top: 5px;
			}
			&.active{
				span{
					color: #0BCFCA;
				}
			}
		}
	}
</style>
