<template>
	<div class="howToPlayContent">
		<publicTop :data="data"></publicTop>
		<div class="mian">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import publicTop from "@/components/publicTop.vue";
import { howToPlayList } from "@/api/index.js";
export default{
	data(){
		return {
			data: {
				list: [],
				classSign: "SecondIndex",
				right: true,
				left: true
			}
		}
	},
	components: {
		publicTop
	},
	created(){
		howToPlayList().then(res => {
			this.data.list = res.data.data;
		});
	}
}
</script>

<style lang="scss" scoped>
	.mian{
		width: 100%;
		height: auto;
		position: absolute;
		left: 0px;
		top: 102px;
		background: #F5F7FA;
		padding-top: 40px;
		overflow: hidden;
	}
</style>
