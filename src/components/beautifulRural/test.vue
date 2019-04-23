<template>
  <div class="app-container">
    <div
      class="app-container-left"
      ref="leftEl"
    >
      <div 
        class="app-container-left-dots"
      >
        <div
          class="dot"
          :class="current === idx ? 'active' : ''"
          v-for="(dot, idx) in dataSource"
          @click="handleClick(idx)"
          :key="dot.id"
        >
          <div class="title">{{dot.title}}</div>
        </div>
      </div>
    </div>
    <div
      class="app-container-right"
      ref="rightEl"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <Card
        v-for="(card, idx) in dataSource"
        :key="card.id"
        :card="card"
        :index="idx"
        :current="current"
        :length="dataSource.length"
        :click="handleClick.bind(this, idx)"
      />
    </div>
  </div>
</template>
<script>
import Card from "./card";
let tId = null;
export default {
  props: {
    dataSource: Array
  },
  data() {
    return {
      current: 0, // 当前显示的元素下标
      rightElHeight: 0, // 右侧元素高度, 需要结合这个参数计算左边的offsetTop
      dotHeight: 0, // 左侧每个元素高度
      startY: 0, // touchstart时滚动的垂直距离,
      listenMove: false // 是否需要接收touchmove事件处理
    };
  },
  components: {
    Card
  },
  methods: {
    // 开始触摸
    touchstart(e) {
      if (!e.touches || !e.touches[0]) {
        return;
      }
      this.startY = e.touches[0].pageY;
      this.listenMove = true;
    },
    touchmove(e) {
      if (!this.listenMove) {
        return;
      }
      this.throttle(this.handleTouchMove(e), 100);
    },
    // 手指抬起, 触摸结束
    touchend(e) {
      this.startY = 0;
      this.listenMove = false;
    },
    // 防抖
    throttle(func, delay) {
      var timer = null;
      return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
          timer = setTimeout(function() {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    },
    // 处理触摸移动
    handleTouchMove(e) {
      if (!e.touches || !e.touches[0]) {
        return;
      }
      const offsetTop = e.touches[0].pageY - this.startY;
      this.current -= offsetTop > 0 ? 1 : -1;
      if (this.current < 0) {
        this.current = 0;
      }
      if (this.current > this.dataSource.length) {
        this.current = this.dataSource.length;
      }
      this.listenMove = false;
    },
    // 点击某个卡片, 切换到对应的
    handleClick(idx) {
      this.current = idx;
    }
  },
  computed: {
    // 返回右边卡片的高度
    getRightElHeight() {
      try {
        return this.$refs.rightEl.offsetHeight;
      } catch (error) {
        return 0;
      }
    },
  },
  watch: {
    // 监听 current 的变化, 改变 left 的 scrollTop
    'current': function(current, lastCurrent){
      const height = current * 107;
      let scrollTop = this.$refs.leftEl.scrollTop;
      // 超过 5 个的滚动距离不使用动画
      if(Math.abs(current - lastCurrent) > 5){
        this.$refs.leftEl.scrollTo(0, height);
        return ;
      }
      const scrollFunc = () => {
        if(scrollTop >= height){
          return ;
        }
        this.$refs.leftEl.scrollTo(0, scrollTop);
        scrollTop = Math.min(height, scrollTop + 10);
        requestAnimationFrame(scrollFunc);
      }
      scrollFunc();
    }
  },
  created() {
    this.$nextTick(() => {
      this.rightElHeight = this.getRightElHeight; // 获取右侧高度
      this.dotHeight = this.$refs.leftEl.children[0].offsetHeight; // 获取左侧元素高度
      // 初始距离
      this.current = Math.floor(this.dataSource.length / 2); // 获取当前显示的元素
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex: 1;
  overflow: hidden;

  &-left {
    width: 68px + 82px + 14px;
    position: relative;
    overflow-y: auto;
    height: 90%;
    top: 5%;
    transition: all .3s;

    .dot {
      position: relative;
      height: 107px;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        background-color: rgba(11, 207, 202, 1);
        transition: all 0.3s;
      }

      &:after {
        width: 2px;
        height: 97px;
        left: 46px;
        top: 10px;
      }

      &:before {
        top: 0;
        left: 42px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .title {
        line-height: 34px;
        margin-left: 68px;
        transition: all 0.3s;
        font-size: 22px;
      }

      &.active {
        &:before {
          width: 34px;
          height: 34px;
          left: 30px;
        }
      }
    }
  }

  &-right {
    flex: 1;
    width: 340px;
    position: relative;
  }
}
</style>