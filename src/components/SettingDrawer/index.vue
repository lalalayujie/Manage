<template>
  <div>
    <el-button
      class="handle"
      icon="el-icon-setting"
      @click="drawer = true"
      style="margin-left: 16px"
      circle
    >
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <h3 class="setting">主题设置：</h3>
      <el-radio-group
        class="theme"
        :label="$route.query.Theme || 'dark'"
        v-model="Theme"
        @change="($event) => handleSettingChange('Theme', $event)"
      >
        <el-radio label="dark">黑色</el-radio>
        <el-radio label="white">白色</el-radio>
      </el-radio-group>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      Theme:'dark',
      label:'',
    };
  },
  methods: {
    handleSettingChange(type, label) {
      this.$router.push({ query: { ...this.$route.query, [type]: label } });
      this.$emit("zi",label)
    },
  },
};
</script>
<style scoped>
.handle {
  position: absolute;
  top: 480px;
  right: 12px;
  font-size: 20px;
  background-color: #e9eef3;
}
.setting {
  margin: 10px;
}
.theme {
  margin: 20px;
}
.menu {
  margin: 20px;
}
</style>