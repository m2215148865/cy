<template>
	<div class="publicbut">
		<p><span>¥{{ price }}</span>/人</p>
		<button>立即购买</button>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	props: ["price"]
}
</script>

<style lang="scss" scoped>
	.publicbut{
		width: 100%;
		height: 120px;
		background:rgba(255,255,255,1);
		box-shadow:0px -6px 10px 0px rgba(0, 0, 0, 0.06);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		padding: 0 30px;
		display: flex;
		justify-content: space-between;
		p{
			line-height: 120px;
			color: #999;
			font-size: 22px;
			span{
				color: #FFBB40;
				font-size: 36px;
			}
		}
		button{
			width: 240px;
			height: 88px;
			background: #0BCFCA;
			border-radius: 4px;
			color: #fff;
			font-size: 30px;
			margin-top: 16px;
		}
	}
</style>