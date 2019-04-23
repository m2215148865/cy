<template>
	<bm-overlay
	ref="customOverlay"
	:class="{sample: true}"
	pane="labelPane"
	@draw="draw"
	>
		<div class="box" v-if="name== '服务'">
			<div class="mian">
				<div class="svg">
					<img :src="svg==1? require('@/assets/svg/Navigation/mapWC.svg') : svg==2? require('@/assets/svg/Navigation/mapparkingLot.svg') : require('@/assets/svg/Navigation/mapGasStation.svg')">
				</div>
			</div>
		</div>
		<div class="box1" v-if="name== '景区'">
			<div class="mian" @touchend="scenery" ref="div">
				{{ text }}
			</div>
		</div>
	</bm-overlay>
</template>

<script>
export default {
	data(){
		return {
			list: [1,2,3,4,5],
			active: {}
		}
	},
	props: ['text', 'position',"listArr","svg","name"],
	watch: {
		position: {
			handler () {
				this.$refs.customOverlay.reload()
			},
			deep: true
		}
	},
	methods: {
		draw ({el, BMap, map}) {
			const {lng, lat} = this.position;
			const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
			el.style.left = pixel.x + 'px'
			el.style.top = pixel.y + 'px'
		},
		scenery(){
			for(let i = 1; i < this.$refs.div.parentNode.parentNode.parentNode.children.length; i++){
				this.$refs.div.parentNode.parentNode.parentNode.children[i].children[0].children[0].className = "mian";
			}
			this.$refs.div.className="mian active";
		}
	},
	created(){
		
	}
}
</script>

<style lang="scss" scoped>
.sample {
	position: absolute;
	.box{
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #0BCFCA;
		position: absolute;
		top: 0;
		left: 0;
		.mian{
			width: 76px;
			height: 76px;
			background: #0BCFCA;
			border-radius: 50%;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 20px;
			right: -260%;
			.svg{
				width: 48px;
				height: 48px;
			}
		}
	}
	.box1{
		width:30px;
		height:30px;
		background:rgba(11,207,202,.3);
		border-radius:50%;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		&::before{
			content: "";
			width: 20px;
			height: 20px;
			display: block;
			background: #0BCFCA;
			border-radius: 50%;
		}
		.mian{
			padding: 16px 20px;
			height: auto;
			background: #fff;
			display: flex;
			border-radius: 6px;	
			position: absolute;
			bottom: 40px;
			white-space: nowrap;
			font-size: 28px;
			color: #666;
			&::before{
				content: "";
				position: absolute;
				border-width: 10px 10px 0 10px;
				border-color: #fff transparent;
				border-style: solid;
				left: 50%;
				transform: translateX(-50%);
				bottom: -9px;
			}
			&.active{
				background: #0BCFCA;
				color: #fff;
				&::before{
					border-color: #0BCFCA transparent;
				}
			}			
		}
	}
	// .box1{
	// 	padding: 16px 20px;
	// 	height: auto;
	// 	background: #fff;
	// 	display: flex;
	// 	border-radius: 6px;
	// 	&::before{
	// 		content: "";
	// 		position: absolute;
	// 		border-width: 10px 10px 0 10px;
	// 		border-color: #fff transparent;
	// 		border-style: solid;
	// 		left: 50%;
	// 		transform: translateX(-50%);
	// 		bottom: -9px;
	// 	}
	// 	&.active{
	// 		background: #0BCFCA;
	// 		p{
	// 			color: #fff;
	// 		}
	// 		&::before{
	// 			border-color: #0BCFCA transparent;
	// 		}
	// 	}
	// 	p{
	// 		white-space: nowrap;
	// 		font-size: 28px;
	// 		color: #666;
	// 	}
	// 	.yuan{
	// 		width:30px;
	// 		height:30px;
	// 		background:rgba(11,207,202,.3);
	// 		border-radius:50%;
	// 		position: absolute;
	// 		bottom: -50px;
	// 		left: 50%;
	// 		transform: translateX(-50%);
	// 		display: flex;
	// 		justify-content: center;
	// 		align-items: center;
	// 		&::before{
	// 			content: "";
	// 			width: 20px;
	// 			height: 20px;
	// 			display: block;
	// 			background: #0BCFCA;
	// 			border-radius: 50%;
	// 		}
	// 	}
	// }
}
</style>