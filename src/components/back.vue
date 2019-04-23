<template>
	<div class="back" @click="back">
		<img src="@/assets/svg/public/back_white.svg">
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	methods: {
		back(){
			this.$router.back(-1);
		}
	}
}
</script>

<style lang="scss" scoped>
	.back{
		width: 24px;
		height: 40px;
		transform: rotate(180deg);
		margin-left: 30px;
		margin-top: 40px;
	}
</style>
