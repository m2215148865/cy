<template>
	<div>
		<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		>
			<ul class="right" v-show="show">
				<li v-for="item in list"
				:key="item.id"
				@click="search(item)"
				:class="[item.falg? 'active' : '']"
				>
					<img :src="!item.falg? item.url : item.url2">
					<span>{{ item.name }}</span>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
import { NavigationRight } from "@/api/index.js";
export default{
	data(){
		return {
			list: [],
			SquareOverlay: {},
			arr: []
		}
	},
	created(){
		NavigationRight().then(res => {
			this.list = res.data.data;
		})
	},
	methods: {
		beforeEnter(el){
			 el.style.bottom = "0"
			 el.style.opacity = "0"
		},
		enter(el,done){
			 el.offsetWidth;
			 el.style.bottom = 231/75 + "rem";
			  el.style.opacity = "1"
			 // 动画的持续时间
			 el.style.transition = "all 0.4s ease";
		},
		afterEnter(el){
			this.show = !this.show
		},
		search(item){
			item.falg = !item.falg;
		}
	},
	props: [
		"show"
	]
}
</script>

<style lang="scss" scoped>
	.right{
			width: 100px;
			position: absolute;
			right: 66px;
			bottom: 200px;
			li{
				width: 100px;
				height: 100px;
				background: #fff;
				border-radius: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 30px;
				img{
					width: 36px;
					height: 40px;
				}
				&.active{
					color: #0cf
				}
			}
		}	
</style>
