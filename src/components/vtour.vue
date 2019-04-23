<template>
	<div id="vtour" style="width:100%;height:100%">
	</div>
</template>

<script>
export default{
	data(){
		return {
			num: 1,
			count: 0,
		}
	},
	created(){
		// this.count =0;
		// this.num = this.vtourId;
		// // 此处初始化
		// // this.$store.dispatch('方法');\
		// let  test = [];
		// let group = {'name':'分组1','scenes':[]};
		// for(let i = 0; i < 10; i++){
		// 	let obj = {};
		// 	obj.arr = []; 
		// 	obj.name = '分组'+ (i + 1);
		// 	for(let j = 0; j < 10; j++){
		// 		let obj1 = {};
		// 		obj1.name = '场景'+ (i + 1) + (j + 1);
		// 		obj1.sceneid = j + 1;
				
		// 		obj.arr.push(obj1);
		// 	}
		// 	test.push(obj);
		// }
		// this.$store.dispatch('vtourArr',test);
		
	},
	mounted(){
		var tourid = '0201';
		var baseurl = 'http://192.168.31.86:52720/';
		var that = this;
		window.vtourObj = this;
		// var baseurl = 'https://hmltec.oss-cn-beijing.aliyuncs.com/wuchang_vtour/';
		embedpano({swf:baseurl+"tour.swf", xml:baseurl+'vtours/'+tourid+'/tour.xml', target:"vtour", mobilescale:0.5, html5:"auto",  passQueryParameters:true,consolelog:true,
		onready(krpanoObj) {
			window.krpanoObj = krpanoObj;
			
			let vtourArr = [];
			// krpanoObj.call('goscene_hotspot(scene_02)');
			// let sceneCount = krpanoObj.get('scene.count');  
			setTimeout(() => {
				let sceneArr = krpanoObj.get("scene").getArray();
				let groupCount = krpanoObj.get("group.count");
				let groupArr = [];
				for (let index = 0; index < groupCount; index++) {
					const element = krpanoObj.get("group["+index+"]");
					groupArr.push(element);
					groupArr[index].sceneArr = [];
				}
				
				for (let index = 0; index < sceneArr.length; index++) {
					const element = sceneArr[index];
					let sceneobj = {};
					var groupname = String(element.group);		
					var groupid = groupname.charAt(groupname.length-1);
					groupid  = parseInt(groupid);
					groupid --;
					
					sceneobj.name = element.name;
					sceneobj.title = element.title;
					sceneobj.imgurl = element.thumburl;
					groupArr[groupid].sceneArr.push(sceneobj);
				}
				console.log('lxg', groupArr);
				console.log('lxg', 'lxg');
				that.updateSceneData(groupArr);

			}, 1000);

			// //添加场景更新回调
			// window.krpanoObj.call('txtadd()');


          }
		
		});
	},
	methods: {
		// this.$emit('fn')
		updateSceneData(groupArr){
			// this.$emit('fn')
			this.$store.dispatch('vtourArr',groupArr);
		},
		activedPano(scenename){
			console.log(activedPano);
			this.$store.dispatch('activePano',scenename);
		}
	},
	computed: {
		listenstage() {
			return this.$store.state.activedPanoId;
		}
	},
	watch:{
		listenstage: function(ov,nv){
		}
	},
	// 父组件传递的值
	props: ["vtourId"]
}
</script>

<style lang="scss" scoped>
	
</style>
