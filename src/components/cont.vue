<template>
  <div>
    <el-header style="display:flex;">
      <el-menu
        :default-active="$route.meta.parentpath"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="skyblue"
        v-for="item in arr111"
        :key="item.url"
      >
        <el-menu-item :index="item.url">{{item.name}}</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  //接收父组件传递过来的参数
  props: {},
  //注册组件
  components: {},
  // 定义变量
  data() {
    return {
      menus: [], //总数据
      arr111: [], //
      arr222: [], //
      arr333: [], //
      arr444: [], //
      arr555: [], //
      arr666: [], //
      activeIndex: "/index", //一级菜单标记
    };
  },
  //事件方法执行
  methods: {
    //总数据
    getData111() {
      axios
        .get("http://49.233.66.125:3030/menu")
        .then((res) => {
          this.menus = res.data.data.menus;
          //   console.log(this.menus, "提出的数据");
          this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //树形分支
    child(menus111, menus222) {
      menus111.map((item1) => {
        this.$set(item1, "child", []);
        menus222.map((item2) => {
          if (item1.menu_id === item2.parent_id) {
            item1.child.push(item2);
          }
        });
      });
    },
    //处理数据
    getData() {
      this.menus.map((item) => {
        if (item.level === 0) {
          this.arr111.push(item);
        }
        if (item.level === 1) {
          this.arr222.push(item);
        }
        if (item.level === 2) {
          this.arr333.push(item);
        }
      });
      this.child(this.arr111, this.arr222);
      this.child(this.arr222, this.arr333);
      this.arr111.pop();
      console.log(this.arr111, "一级菜单");
      console.log(this.arr222, "二级菜单");
      console.log(this.arr333, "三级菜单");
      let arr = this.arr111.filter((item) => {
        return item.url === this.$route.meta.parentpath;
      });
      console.log(arr, "111111");
      console.log(this.$route.meta.parentpath, "222222222222");
      if (arr[0].name === "首页") {
        this.$delete(arr[0], "child");

        this.$set(arr[0], "child", [{ name: "首页", url: "/index" }]);
      }
      this.$bus.$emit("menus", arr);
    },
    //打印导航index
    handleSelect(index) {
      this.activeIndex = index; //路由标记
      console.log(index);
      let arr = this.arr111.filter((item) => {
        return item.url === index;
      });
      console.log(arr, "显示数据");
      if (arr[0].name === "首页") {
        this.$delete(arr[0], "child");
        this.$set(arr[0], "child", [{ name: "首页", url: "/index" }]);
      }
      this.$bus.$emit("menus", arr);
    },
  },
  //页面初始化方法
  mounted() {
    this.getData111();
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