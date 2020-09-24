<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
          <template v-for="item in menus">
            <el-submenu
              :index="item.url"
              :key="item.url"
              v-if="item.child && item.child.length > 0"
            >
              <template slot="title">
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group v-for="item1 in item.child" :key="item1.url">
                <el-menu-item :index="item1.url">{{item1.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.url" :key="item.url" v-else>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  //接收父组件传递过来的参数
  props: {},
  //注册组件
  components: {},
  // 定义变量
  data() {
    return {
      menus: [],
    };
  },
  //事件方法执行
  methods: {},
  //页面初始化方法
  mounted() {
    this.$bus.$on("menus", (data) => {
      this.menus = data[0].child;
      console.log(this.menus, "当前数据");
    });
  },
  //监听方法  click事件等，执行drawFeatures方法
  //监听值变化
  watch: {},
  //计算
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>