<template>
	<div class="cultureSymbol">
		<img src="@/assets/img/Impression/culture_bg.jpg">
			<router-link to="/"></router-link>
			<router-link to="/"></router-link>
			<router-link to="/"></router-link>
			<router-link to="/"></router-link>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	created(){
		this.$store.dispatch('cultureSymbolList');
	}
}
</script>

<style lang="scss" scoped>
	.cultureSymbol{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
		}
		a{
			display: block;
		}
		a:nth-of-type(1){
			width: 330px;
			height: 550px;
			position: absolute;
			left: 350px;
			top: 200px;
		}
		a:nth-of-type(2){
			width: 200px;
			height: 500px;
			position: absolute;
			left: 70px;
			top: 300px;
		}
		a:nth-of-type(3){
			width: 230px;
			height: 230px;
			position: absolute;
			left: 40px;
			top: 920px;
		}
		a:nth-of-type(4){
			width: 370px;
			height: 310px;
			position: absolute;
			left: 380px;
			top: 860px;
		}
	}
</style>
