<template>
	<div class="route" v-show="routeState">
		<ul>
			<li>
				<p>1.路线名路线名路线名路线名路路线名路线名路线名路线名路</p>
				<router-link to="/" tag="div">
					<img src="@/assets/svg/Navigation/seeRoute.svg">
					查看路线
				</router-link>
			</li>
			<li>
				<p>1.路线名路线名路线名路线名路路线名路线名路线名路线名路</p>
				<router-link to="/" tag="div">
					<img src="@/assets/svg/Navigation/seeRoute.svg">
					查看路线
				</router-link>
			</li>
			<li>
				<p>1.路线名路线名路线名路线名路路线名路线名路线名路线名路</p>
				<router-link to="/" tag="div">
					<img src="@/assets/svg/Navigation/seeRoute.svg">
					查看路线
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	props: ["routeState"]
}
</script>

<style lang="scss" scoped>
	.route{
		width: 100%;
		padding: 0 30px;
		position: absolute;
		left: 0px;
		bottom: 223px;
		ul{
			padding: 0 30px;
			background: #fff;
			border-radius: 10px;
			li{
				width: 100%;
				height: 100px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2px solid #eee;
				&:last-of-type{
					border: 0;
				}
				p{
					width: 432px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow:ellipsis;
					font-size: 30px;
					color: #666;
				}
				div{
					display: flex;
					align-items: center;
					color: #0BCFCA;
					img{
						width: 26px;
						height: 26px;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
