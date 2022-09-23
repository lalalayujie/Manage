<template>
  <div>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="付款账号">{{name}}</el-descriptions-item>
      <el-descriptions-item label="付款金额">{{money}}</el-descriptions-item>
      
    </el-descriptions>
    <el-button type="primary" @click="sub" round>提交</el-button>
    <el-button type="primary" @click="step" round>上一步</el-button>
  </div>
</template>
    
    <script>
export default {
  data(){
    return{
      name : localStorage.getItem("name"),
      money :localStorage.getItem("money")
    }
  },
  methods:{
    sub(){
      this.$router.push('/form/step-form/result')
    },
    step(){
      this.$router.push('/form/step-form/info')
    }
  }
};
</script>
    
    <style scoped>
</style>