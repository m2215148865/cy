<template>
	<div>
		<ul class="left" v-show="!mapLeftState" v-if="!mapBottom">
			<li
			v-for="item in list"
			:key="item.id"
			@click="search(item.id)"
			>
				<img :src="!item.state? item.svg1_url : item.svg2_url">
			</li>
		</ul>
		<div class="botText" v-if="mapLeftState">
			<div class="content">
				<h1>{{ mapLeftobj.name }}</h1>
				<p class="address">{{ mapLeftobj.addr }}</p>
				<div class="bottom">
					<button>
						<img src="@/assets/svg/Navigation/Navigation.svg">
						<span>导航</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			list: [],
			active: "",
			flag: false,
			mySquare: {},
			arr: []
		}
	},
	created(){
		this.list = this.$store.getters.mapLeft;
	},
	beforeUpdate(){
	},
	methods: {
		search(id){
			let arr = [];
			this.list.forEach(item => {
				if(id == item.id){
					item.state = !item.state; // 将当前是否高亮状态取反
				}
				if(item.state){
					arr.push(...item.listArr); // 将状态为true的数组添加进去
				}else{
					arr.push(...[]); // 状态为false的添加空数组
				}
				this.$emit('obtainData',arr,"服务"); // 调用父元素方法，传递值
				// console.log(item.state);
			})
		},
		close(){
			
		}
	},
	props: [
		"mapLeftobj",
		"mapLeftState",
		"mapBottom"
	]
}
</script>

<style lang="scss" scoped>
	.left{
		width: 90px;
		height: 272px;
		background: #fff;
		position: absolute;
		left: 30px;
		bottom: 230px;
		border-radius: 10px;
		li{
			width: 100%;
			height: 90px;
			border-top: 2px solid #eee;
			padding: 25px;
			&:first-of-type{
				border: 0;
			}
			img{
				width: 40px;
				height: 40px;
			}
		}
	}
	.botText{
		width: 100%;
		height: 306px;
		padding: 0 30px;
		position: absolute;
		left: 0;
		bottom: 46px;
		z-index: 999;
		.content{
			width: 100%;
			height: 100%;
			background: #fff;
			padding: 50px 30px 0;
			border-radius: 10px;
			.close{
				width: 44px;
				height: 44px;
				position: absolute;
				right: 20px;
				top: 0;
			}
			h1{
				font-size: 40px;
				color: #333;
				font-weight: 600;
			}
			.address{
				font-size: 30px;
				color: #999;
				margin-top: 32px;
			}
			.bottom{
				width: 100%;
				button{
					width:146px;
					height:54px;
					background:rgba(11,207,202,.15);
					border-radius:4px;
					float: right;
					display: flex;
					justify-content: center;
					align-items: center;
					img{
						width: 30px;
						height: 30px;
					}
					span{
						font-size: 28px;
						color: #0BCFCA;
					}
				}
			}
		}
	}
</style>
