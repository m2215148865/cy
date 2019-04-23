<template>
	<div class="panorama1">
		<router-link class="switch" to="panorama1" tag="div">
			<img src="@/assets/svg/SecondIndex/switch2.svg">
		</router-link>
		<mock></mock>
	</div>
</template>

<script>
import mock from "@/components/panorama/mock.vue";
export default{
	data(){
		return {
			
		}
	},
	components: {
		mock
	}
}
</script>

<style lang="scss" scoped>
	.switch{
		width: 40px;
		height: 40px;
	}
</style>
