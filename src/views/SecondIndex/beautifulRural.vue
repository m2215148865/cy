<template>
	<div class="beautifulRural">
		<Test :dataSource="dataSource"></Test>
	</div>
</template>

<script>
import Test from "@/components/beautifulRural/test";
const getMockData = () => {
  let dataSource = [];
  for (let i = 0; i < 10; i++) {
    dataSource.push({
      id: i,
      tags: [
        {
          text: "5A",
          color: "rgba(255,176,35,1)"
        },
        {
          text: "标签名",
          color: "rgba(0,195,190,1)"
        },
        {
          text: "标签名",
          color: "rgba(0,195,190,1)"
        }
      ],
      title: `坂上村${i}`
    });
  }
  return dataSource;
};
export default {
  data() {
    return {
      dataSource: getMockData()
    };
  },
  components: {
    Test
  },
	created(){
		this.$store.dispatch('restaurantList');
	}
};
</script>

<style lang="scss" scoped>

.beautifulRural {
  height: calc(100vh - 1.36rem);
  display: flex;
  flex-direction: column;
  background: rgba(245, 247, 250, 1);
}
</style>