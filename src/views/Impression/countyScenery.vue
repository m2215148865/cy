<template>
	<div class="countyScenery">
		<div class="img">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555819265650&di=d9201d1ac3231bae3eabfeae2842b065&imgtype=0&src=http%3A%2F%2Fwww.mangowed.com%2Fuploads%2Fallimg%2F140219%2F1-1402191UA1952.jpg">
		</div>
		<div class="bj">
			<rightList></rightList>
			<countySceneryBottom></countySceneryBottom>
		</div>
	</div>
</template>

<script>
import rightList from "@/components/countyScenery/rightList.vue";
import countySceneryBottom from "@/components/countyScenery/bottom.vue";
import vtour from "@/components/vtour.vue";
export default{
	data(){
		return {
			vtourId: "0201",
		}
	},
	components: {
		rightList,
		countySceneryBottom,
		vtour
	},
	created(){
	}
}
</script>

<style lang="scss" scoped>
	.countyScenery{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		.img{
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	}
</style>
