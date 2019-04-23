<template>
	<div :class="['publicTopLeft',dataRigh?'publicTopLeft1' : '',dataLeft? 'publicTopLeft2' : '']" @click="goIndex">
		<div class="border1 border"></div>
		<div class="border2 border"></div>
		<div class="border3 border"></div>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	methods: {
		goIndex(){
			this.$router.push("/")
		}
	},
	props: [
		"dataRigh",
		"dataLeft"
	],
	created(){
	}
}
</script>

<style lang="scss" scoped>
	.publicTopLeft{
		width: 40px;
		height: 40px;
		&.publicTopLeft1,&.publicTopLeft2{
			.border{
				background: #000;
			}
		}
		.border{
			height: 4px;
			background: #fff;
		}
		.border1{
			width: 30px;
			float: right;
			margin-bottom: 10px;
		}
		.border2{
			width: 40px;
			clear: both;
		}
		.border3{
			width: 30px;
			float: left;
			margin-top: 10px;
		}
	}
</style>
