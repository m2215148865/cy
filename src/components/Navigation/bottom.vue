<template>
	<div>
		<div v-show="!mapBottom">
			<div class="tab">
				<ul class="list">
					<li
					v-for="item in list"
					:key="item.id"
					@click="search(item.name,item)"
					ref="haha"
					>
						<img :src="item.falg? item.url2 : item.url">
						<span :class="[item.falg? 'active' : '']">{{ item.name }}</span>
					</li>
				</ul>
			</div>
			<transition>
				<NavigationRight :show="show"></NavigationRight>
			</transition>
		</div>
		<introduce :mapLeftobj="mapLeftobj" :mapBottom="mapBottom"></introduce>
		<route :routeState="routeState"></route>
	</div>
</template>

<script>
import { NavigationList } from "@/api/index.js";
import NavigationRight from "@/components/Navigation/right";
import introduce from "@/components/Navigation/introduce.vue";
import route from "@/components/Navigation/route.vue";
export default{
	data(){
		return {
			list: [],
			active: "",
			show: false,
			routeState:false
		}
	},
	created(){
		NavigationList().then(res => {
			this.list = res.data.data
		});
		
	},
	methods: {
		search(name,item){
			let arr = [];
			item.name == "景区"? arr = this.$store.getters.scenicSpot : arr = this.$store.getters.beautifulRuralGps
			this.list.forEach(value => {
				if(value.name != name){
					value.falg = false;
				}
			});
			item.falg = !item.falg;
			if(item.falg){
				console.log(11);
				this.$emit('obtainData',arr,"景区");
				console.log(arr);
			}else{
				console.log(22);
				this.$emit('obtainData',[],"景区");
			}
			if(item.name != "周边"){
				this.show = false;
			}
			if(item.name == "路线"){
				this.routeState = !this.routeState;
				return;
			}
			if(item.name == "周边"){
				if(item.falg){
					this.show = true;
				}else{
					this.show = false;
				}
				return;
			}
			
			
		}
	},
	components: {
		NavigationRight,
		introduce,
		route
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
