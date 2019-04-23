<template>
	<div class="bottom">
		<h1 class="title">崇阳</h1>
		<div class="briefIntroduction">
			简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
			<div class="mock">
				<span>查看更多</span>
				<img src="@/assets/svg/public/businessdetails.svg">
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	}
}
</script>

<style lang="scss" scoped>
	.bottom{
		width: 100%;
		height: 240px;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 30px 30px 0;
		.title{
			font-size: 50px;
			color: #fff;
			margin-bottom: 30px;
		}
		.briefIntroduction{
			width: 100%;
			height: 80px;
			font-size: 30px;
			color: #fff;
			position: relative;
			.mock{
				position: absolute;
				right: 0px;
				bottom: 0px;
				display: flex;
				align-items: center;
				span{
					color: #0BCFCA;
					font-size: 26px;
				}
				img{
					width: 52px;
					height: 9px;
					margin-left: 10px;
				}
			}
		}
	}
</style>
