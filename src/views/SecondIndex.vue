<template>
	<div class="SecondIndex">
		<publicTop :data="data"></publicTop>
		<div class="mian">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import publicTop from "@/components/publicTop";
import mainScenicSpots from "@/views/SecondIndex/mainScenicSpots";
import { SecondIndexList } from "@/api/index.js";
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
	created(){
		SecondIndexList().then(res => {
			this.data.list = res.data.data;
		});
	},
	mounted(){
		
	},
	components: {
		mainScenicSpots,
		publicTop
	}
	
}
</script>

<style lang="scss" scoped>
	.mian{
		margin-top: 102px;
	}
</style>
