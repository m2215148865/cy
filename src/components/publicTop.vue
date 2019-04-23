<template>
	<div
	:class="[
		data.classSign == 'Impression'? 'publicTop1' : data.classSign == 'SecondIndex'? 'publicTop2': data.classSign == 'Navigation'? 'publicTop3' : '',
		'PublicTop'
		]"
	>
		<publicTopLeft :dataRigh="data.right" :dataLeft="data.left"></publicTopLeft>
		<ul class="topList">
			<router-link
			v-for="item in data.list"
			:key="item.id"
			:to="item.url"
			tag="li"
			>
				{{ item.name }}
				<span></span>
			</router-link>
		</ul>
		<publicTopRight v-if="data.right"></publicTopRight>
	</div>
</template>

<script>
import publicTopLeft from "@/components/publicTop/publicTopLeft.vue";
import publicTopRight from "@/components/publicTop/publicTopRight.vue"; 
export default{
	data(){
		return {
		}
	},
	components: {
		publicTopLeft,
		publicTopRight
	},
	props: [
		"data"
	]
}
</script>

<style lang="scss" scoped>
	.PublicTop{
		width: 100%;
		height: 102px;
		border-bottom: 2px solid rgba($color: #fff, $alpha: 0.2);
		padding: 40px 30px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 999;
		background: #fff;
		&.publicTop1{
			justify-content: flex-start;
			background:linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,0));
			.topList{
				margin: 0 0 0 42px;
				li{
					margin-left: 48px;
					color: #fff;
					&:first-of-type{
						margin-left: 0;
					}
				}
			}
		}
		&.publicTop2{
			.topList{
				li{
					flex: 1;
					text-align: center;
					&.router-link-exact-active{
						color: #00C3BE;
						span{
							content: "";
							width: 40px;
							height: 6px;
							background: #00C3BE;
							position: absolute;
							left: 50%;
							transform: translateX(-50%);
							bottom: 0;
						}
					}
				}
			}
		}
		&.publicTop3{
			background: transparent;
		}
		.topList{
			width: 100%;
			height: 62px;
			margin: 0 42px;
			display: flex;
			align-items: center;
			li{
				flex: 1;
				height: 62px;
				font-size: 28px;
				position: relative;
				color: #000;
				&.router-link-exact-active{
					span{
						content: "";
						width: 40px;
						height: 6px;
						background: #fff;
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						bottom: 0;
					}
				}
			}
			
		}
	}
</style>
