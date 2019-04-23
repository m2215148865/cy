<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div
			class="swiper-slide"
			v-for="(item,i) in list"
			:key="i"
			:class="{active: active==i}"
			@click="selected(i)"
			>
			<img :src="item.imgurl">
			<span>{{ item.title }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default{
	data(){
		return {
			active: "",
			num: 0,
			index: 0
		}
	},
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 5.5,
			spaceBetween: 16,
			observer: true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents: true,//修改swiper的父元素时，自动初始化swiper
		});
	},
	methods: {
		selected(index){
			this.$store.dispatch('imgIndex',index);
			this.active = this.$store.getters.imgIndex;
			this.$store.dispatch('panorama1Click',index);
			window.krpanoObj.call('goscene_hotspot('+this.list[index].name+')');
			// js(window.vtourObj.$store.dispatch('activePano',get(scene[get(xml.scene)].name)));
			console.log();
			// activedPanoId
		}
	},
	props: ["list"],
	created(){
		console.log();
	},
	computed: {
		listenstage() {
			return this.$store.state.activedPanoId;
		},
		imgIndex(){
			return this.$store.state.imgIndex;
		}
	},
	watch:{
		listenstage: function(ov,nv){
			this.$store.getters.vtourArr.forEach((item,index) => {
				item.sceneArr.forEach((value,i) => {
					if(ov == value.name){
						this.$store.dispatch('imgIndex',i);
					}
				});
			});
		},
		imgIndex: function(ov,nv){
			console.log("修改前为：" + nv);
			console.log("修改后为：" + ov);
			console.log(this.active);
			this.active = this.$store.getters.imgIndex;
		}
	}
}
</script>

<style lang="scss" scoped>
	.swiper-container{
		margin-top: 34px;
		.swiper-slide{
			height: 110px;
			border: 4px solid #fff;
			background: #f00;
			position: relative;
			overflow: hidden;
			span{
				width: 100%;
				display: block;
				position: absolute;
				left: 0;
				bottom: 0;
				font-size: 22px;
				text-align: center;
				color: #fff;
				transform: scale(0.8,0.8);
			}
			&.active{
				border-color: #0BCFCA;
			}
		}
	}
</style>