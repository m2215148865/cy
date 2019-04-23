<template>
	<div v-show="!mapBottom">
		<div class="tab">
			<ul class="list">
				<li
				v-for="item in list"
				:key="item.id"
				@click="search(item.name,item)" 
				:class="{active: active==item.name}"
				ref="haha"
				>
					<img :src="item.state? item.url2 : item.url">
					<span :class="[item.state? 'active' : '']">{{ item.name }}</span>
				</li>
			</ul>
		</div>
		<transition>
			<NavigationRight :show="show"></NavigationRight>
		</transition>
		<introduce :mapLeftobj="mapLeftobj" :mapBottom="mapBottom"></introduce>
	</div>
</template>

<script>
import { NavigationList } from "@/api/index.js";
import NavigationRight from "@/components/Navigation/right";
import introduce from "@/components/Navigation/introduce.vue";
export default{
	data(){
		return {
			list: [],
			active: "",
			show: false
		}
	},
	created(){
		console.log(this.mapLeftobj)
		NavigationList().then(res => {
			this.list = res.data.data
		});
	},
	methods: {
		search(name,item){
			this.active = name;
			this.list.forEach(value => {
				if(value.name == name){
					value.state = !value.state;
				}else{
					value.state = false;
				}
			});
			if(item.name != "周边"){
				this.show = false;
			}
			if(item.name == "路线"){
				return;
			}
			if(item.name == "周边"){
				if(item.state){
					this.show = true;
				}else{
					this.show = false;
				}
				return;
			}
			console.log(this.$store.getters.scenicSpot)
			this.$emit('obtainData',this.$store.getters.scenicSpot,"景区");
		}
	},
	components: {
		NavigationRight,
		introduce
	},
	props: ["mapBottom","mapLeftobj"]
}
</script>

<style lang="scss" scoped>
	.tab{
		width: 100%;
		height: 124px;
		padding: 0 30px;
		position: absolute;
		bottom: 64px;
		left: 0;
		z-index: 99;
		.list{
			width: 100%;
			height: 100%;
			background: #fff;
			display: flex;
			align-items: center;
			li{
				flex: 1;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				&.active{
					color: #0cf;
				}
				img{
					margin: 0px auto;
				}
				&:nth-of-type(1){
					img{
						width: 62px;
						height: 43px;
					}
				}
				&:nth-of-type(2){
					img{
						width: 55px;
						height: 52px;
					}
				}
				&:nth-of-type(3){
					img{
						width: 53px;
						height: 52px;
					}
				}
				&:nth-of-type(4){
					img{
						width: 48px;
						height: 48px;
					}
				}
				span{
					display: block;
					font-size: 20px;
					transform: scale(0.9);
					color: #999;
					&.active{
						color: #00C3BE;
					}
				}
			}
		}
	}
</style>
