<template>
  <div>
    <div>
      <el-container>
        <el-aside>
          <asidesss></asidesss>
        </el-aside>
        <el-container>
          <cont></cont>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import asidesss from "../components/aside";
import cont from "../components/cont";
export default {
  name: "",
  //接收父组件传递过来的参数
  props: {},
  //注册组件
  components: {
    asidesss,
    cont,
  },
  // 定义变量
  data() {
    return {};
  },
  //事件方法执行
  methods: {},
  //页面初始化方法
  mounted() {},
  //监听方法  click事件等，执行drawFeatures方法
  //监听值变化
  watch: {},
  //计算
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>