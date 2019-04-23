<template>
	<div class="routrInfo">
		<InfoTop :header="InfoData.header"></InfoTop>
		<p class="text" v-html="InfoData.description"></p>
		<routrInfoSwiper :listLength="InfoData.routrInfoSwiper"></routrInfoSwiper>
		<div class="content">
			<div>
				<major :list="InfoData.routeStrategy"></major>
			</div>
		</div>
	</div>
</template>

<script>
import InfoTop from "@/components/InfoTop.vue";
import routrInfoSwiper from "@/components/routrInfo/routrInfoSwiper.vue";
import major from "@/components/routrInfo/major.vue";
export default{
	data(){
		return {
			InfoData: {},
			id: this.$route.params.id,
		}
	},
	components: {
		InfoTop,
		routrInfoSwiper,
		major
	},
	created(){
		let arrLength = this.$store.getters.routrInfo.length;
		for(let i = 0; i < arrLength; i++){
			if(this.$store.getters.routrInfo[i].id == this.id){
				this.InfoData = this.$store.getters.routrInfo[i];
				console.log(this.$store.getters.routrInfo[i]);
			}
		}
		if(JSON.stringify(this.InfoData) == "{}"){
			this.InfoData = JSON.parse(localStorage.getItem("obj"));
		}else{
			localStorage.setItem("obj",JSON.stringify(this.InfoData));
		}
	}
}
</script>

<style lang="scss" scoped>
	.routrInfo{
		.text{
			font-size:32px;
			color: #666;
			line-height:48px;
			padding: 0 30px;
			margin-bottom: 64px;
		}
		.content{
			padding-left: 30px;
			>div{
				padding-left: 30px;
				border-left: 2px solid #0BCFCA;
			}
			
		}
	}
</style>
