<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :background-color="color"
    text-color="#B3C0D1"
    active-text-color="#409EFF"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <div class="movebtn" @click="move">
      <el-button class="move" :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"  plain></el-button>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-odometer"></i>
        <span>仪表盘</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="analisis">分析页</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span>表  单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="basicform">基础表单</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="2-2" @click="stepform">分布表单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item @click="user" index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
  </el-menu>
</template>
    
    <script>
export default {
  props:['color'],
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    move() {
      (this.isCollapse = !this.isCollapse),
        this.$emit("iscoll", this.isCollapse);
    },
    analisis(){
      this.$router.push('/dashboard/analysis')
    },
    basicform(){
      this.$router.push('/form/basic-form')
    },
    stepform(){
      this.$router.push('/form/step-form')
    },
    user(){
      this.$router.push('/usermanage')
    }
  },
};
</script>
    
<style scoped>
.el-menu-vertical-demo {
  width: 100%;
  height: 100vh;
}
.move {
  line-height: 24px;
  font-size: 24px;
  color: azure;
  background-color: #545c64;
  border: 0px;
}
.move:hover {
  background-color: #656c72;
}
.movebtn {
  line-height: 24px;
  display: flex;
  flex-direction: row-reverse;
}
</style>