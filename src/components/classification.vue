<template>
	<div
	:class="['classification',Info == 'Info'? 'classification1' : Info == 'howToPlayContent'? 'classification2' : '']"
	>
		<span v-for="(item,i) in label" :key="i" :class="[item.state? '' : 'active']">{{ item.labelName }}</span>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	props: [
		"Info",
		"label"
	]
}
</script>

<style lang="scss" scoped>
	.classification{
		display: flex;
		&.classification1{
			span{
				padding: 8px 12px 6px;;
				font-size: 26px;
			}
		}
		&.classification2{
			span{
				padding: 6px 13px;
				font-size: 22px;
			}
		}
		span{
			padding: 8px 12px;
			border: 2px solid #00C3BE;
			color: #00C3BE;
			font-size: 30px;
			border-radius: 4px;
			margin-left: 12px;
			&:first-of-type{
				margin-left: 0;
			}
			&.active{
				border-color: #FFB023;
				color: #FFB023;
			}
		}
	}
</style>
