<template>
	<div class="Impression">
		<publicTop :data="data"></publicTop>
		<router-view></router-view>
	</div>
</template>

<script>
import publicTop from "@/components/publicTop"; // 顶部
import { ImpressionList } from "@/api/index.js"; // 顶部列表
export default{
	data(){
		return {
			data: {
				list: [],
				classSign: "Impression",
				right: false
			}
		}
	},
	created(){
		ImpressionList().then(res => {
			this.data.list = res.data.data;
		});
	},
	components: {
		publicTop
	}
}
</script>

<style lang="scss" scoped>
</style>