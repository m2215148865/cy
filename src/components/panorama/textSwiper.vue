<template>
	<div class="swiper-container">
		<ul class="swiper-wrapper">
			<li 
			class="swiper-slide"
			:class="{active: active==index}" 
			v-for="(item,index) in $store.getters.vtourArr" 
			:key="item.sceneid"
			@click="selected(index,item.sceneid)"
			>{{ item.title }}</li>
		</ul>
	</div>
</template>

<script>
import Swiper from "swiper";
import $ from "jquery";
export default{
	data(){
		return {
			active: "",
			index: 0
		}
	},
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 5.5,
			spaceBetween: 16,
		});
	},
	methods: {
		selected(name,sceneid){
			this.index = name;
			this.active = this.index;
			this.$store.dispatch('imgIndex',100);
			this.$emit('fun',this.index);
			this.$store.dispatch("activePano",sceneid);
		}
	},
	props: [
		"vtourArr"
	],
	computed: {
		listenstage() {
			return this.$store.state.activedPanoId;
		}
	},
	watch:{
		listenstage: function(ov,nv){
			this.$store.getters.vtourArr.forEach((item,index) => {
				item.sceneArr.forEach((value,i) => {
					if(ov == value.name){
						this.index = item.index;
						this.active = this.index;
						// $store.getters.vtourArr[numId].sceneArr
						// console.log(this.$store.getters.vtourArr[numId].sceneArr);
						this.$emit('fun',this.index);
					}
				});
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.swiper-container{
		margin-top: 34px;
		padding-left: 30px;
		.swiper-slide{
			position: relative;
			overflow: hidden;
			color: #fff;
			padding-bottom: 10px;
		}
		.active{
			color: #0BCFCA;
			&::after{
				content: "";
				width: 20px;
				height: 6px;
				background: #0BCFCA;
				position: absolute;
				left: 15%;
				bottom: 0;
				
			}
		}
	}
</style>