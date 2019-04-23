<template>
  <div 
    class="card"
    :style="{transform: `translate(${Math.abs(current - index) * 70}px, ${(index - current) * 50}px)`, zIndex: length - Math.abs(index - current)}"
    @click="handleClick"
  >
    <h2 class="title">{{card.title}}</h2>
    <div class="tags">
      <div 
        class="tag" 
        v-for="(tag, idx) in card.tags" 
        :key="idx" 
        :style="{color: tag.color, borderColor: tag.color}"
      >{{tag.text}}</div>
    </div>
    <div class="to-detail">
      <a :href="`${card.id}`">查看详情</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 0
    },
    click: {
      type: Function,
    }
  },
  methods: {
    handleClick(){
      this.click();
    }
  }
};
</script>

<style lang="scss" scoped>
	.card {
	  width: 1000px;
	  height: 300px;
	  background: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  box-shadow: -10px 10px 20px #ddd;
	  margin-bottom: 20px;
	  padding: 63px 40px;
	  position: absolute;
	
	  transition: all .3s;
	
	  background-image: url('../../assets/img/bgt.png');
	
	  background-repeat: no-repeat;
	
	  background-size: 50% 100%;
	
	  background-position: 50% 0;
	
	  left: 0;
	  top: 50%;
	  margin-top: -150px;
	  .title {
	    font-size: 46px;
	    font-family: HiraginoSansGB-W3;
	    font-weight: bold;
	    color: rgba(51, 51, 51, 1);
	  }
	
	  .tags {
	    display: flex;
	    align-items: center;
	    justify-content: flex-start;
	    margin-top: 20px;
	
	    .tag {
	      height: 40px;
	      border-width: 1PX;
	      border-style: solid;
	      min-width: 58px;
	      padding: 0 12px;
	      margin-right: 16px;
	
	      font-size: 26px;
	      font-family: HiraginoSansGB-W3;
	      font-weight: normal;
	      text-align: center;
	
	      border-radius: 4px;
	    }
	  }
	
	  .to-detail a {
	    font-size: 24px;
	    font-family: HiraginoSansGB-W3;
	    font-weight: normal;
	    color: rgba(153, 153, 153, 1);
	    text-decoration: none
	  }
	
	}
</style>