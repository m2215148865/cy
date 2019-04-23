<template>
	<div class="panorama">
		<div class="box">
			<vtour></vtour>
		</div>
		<div class="_back">
			<back></back>
		</div>
		<div class="bottom">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import back from "@/components/back.vue";
import vtour from "@/components/vtour.vue";
export default{
	data(){
		return {
			
		}
	},
	components: {
		back,
		vtour
	},
	methods: {
		fn(a){
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.panorama{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
		.box{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			img{
				height: 100%;
			}
		}
		._back{
			position: absolute;
			top: 0;
			left: 0;
		}
		.bottom{
			width: 100%;
			height: 320px;
			padding-top: 30px;
			padding-left: 30px;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
</style>
