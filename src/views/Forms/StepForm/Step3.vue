<template>
    <div>
        操作成功，预计两小时内到账
    <div>
      <el-button type="primary" @click="step" round>完成</el-button>
    </div>

    </div>
  </template>
    
    <script>
  export default {
    methods:{
      step(){
        this.$router.push('/dashboard/analysis')
      }
    }
  };
  </script>
    
    <style scoped>
  </style>