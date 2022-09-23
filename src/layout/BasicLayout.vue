<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'"
        ><SiderMenu @iscoll="coll" :color="label"></SiderMenu
      ></el-aside>
      <el-container>
        <SettingDrawer @zi="fu"></SettingDrawer>
        <el-header><Header></Header></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
    
<script>
import Header from "./Header.vue";
import SiderMenu from "./SiderMenu.vue";
import Footer from "./Footer.vue";
import SettingDrawer from "../components/SettingDrawer/index.vue";

export default {
  data() {
    return {
      collapsed: false,
      isCollapse: false,
      label: "#545c64",
    };
  },
  components: { Header, SiderMenu, Footer, SettingDrawer },
  methods: {
    fu(hah) {
      console.log(hah);
      if (hah === 'dark') {
        this.label = '#545c64';
      }
      if (hah === 'white') {
        this.label = '#ffffff'
      }
    },
    coll(val) {
      this.isCollapse = val;
    },
  },
};
</script>
    
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  transition: 0.88s ease-in-out;
}

.el-menu {
  border: 0px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>