<template>
	<div class="Navigation">
		<publicTop :data="data"></publicTop>
		<div id="allmap" class="allmap">
			<baidu-map
			class="map"
			ak="rGhPoeI5SWfwdu2XoUx6RtGRKIomBk9a"
			:center="center"
			:zoom="zoom"
			@ready="handler"
			@touchstart="start"
			@touchend="fun"
			>
			<bm-navigation
			anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
			>
			</bm-navigation>
			<MyOverlay
			:position="item.gps"
			v-for="(item,i) in coverList"
			:key="i"
			:listArr="coverList"
			@obtainId="obtainId"
			@touchend.native="transmitData(i,name)"
			:svg="item.id"
			:name="name"
			@sceneryClick="scenery"
			>
			</MyOverlay>
			
			</baidu-map>
			<mapLeft
			@obtainData="coverListData"
			:mapLeftobj="mapLeftobj"
			:mapLeftState="mapLeftState"
			></mapLeft>
			<mapBottom
			:mapBottom="mapBottom"
			@obtainData="coverListData"
			:mapLeftobj="mapLeftobj"
			></mapBottom>
		</div>
	</div>
</template>

<script>
import publicTop from "@/components/publicTop.vue";
import MyOverlay from "@/components/Navigation/MyOverlay.vue";
import mapLeft from "@/components/Navigation/left.vue";
import mapBottom from "@/components/Navigation/bottom.vue";
export default{
	data(){
		return {
			data: {
				classSign: "Navigation",
			},
			center: {lng: 0, lat: 0},
			zoom: 3,
			active: false,
			list: [],
			coverList: [],
			mapLeftobj: {},
			mapLeftState: false,
			mapBottom: false,
			leftState: true,
			pixelX: 0,
			pixelY: 0,
			name: ""
		}
	},
	components: {
		publicTop,
		MyOverlay,
		mapLeft,
		mapBottom
	},
	updated(){
		this.$store.dispatch('mainScenicSpotsList');
		this.$store.dispatch('mapLeft');
	},
	methods: {
		handler ({BMap, map}) {
			this.center.lng = 114.045984;
			this.center.lat = 29.562087;
			this.zoom = 15;
		},
		start(e){ // 手指放上去
			this.pixelX = e.pixel.x;
			this.pixelY = e.pixel.y;
		},
		fun(e){ // 手指离开时间
			if(e.pixel.x == this.pixelX && e.pixel.y == this.pixelY){
				if(this.$store.getters.mapflag){
					return;
				}else{
					this.mapLeftState = false;
				}	
			}
			
		},
		coverListData(list,name){
			this.coverList = list;
			this.name = name;
			console.log(list,name);
		},
		obtainId(id){
			console.log(id);
		},
		transmitData(index,name){
			console.log(name);
			if(name == "服务"){
				this.mapLeftobj = this.coverList[index];
				this.mapLeftState = true;
				this.$store.dispatch("mapflag",1);
				setTimeout(() => {
					this.$store.dispatch("mapflag",0);
				},0);
			}else if(name == "景区"){
				this.mapLeftobj = this.coverList[index];
				console.log(this.mapLeftobj);
				this.mapLeftState = true;
				
			}
		},
		scenery(){
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.Navigation{
		#allmap{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0;
			/deep/.anchorBL{ // 去除百度地图logo
				display:none;
			}
			.map{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
