<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="付款账号" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="付款金额" prop="money">
        <el-input
          v-model="ruleForm.money"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
    
    <script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } 
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        money:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      const name = localStorage.getItem("name");
      const pass = localStorage.getItem("pass");
      localStorage.setItem("money",this.ruleForm.money);
      if (this.ruleForm.pass === name && this.ruleForm.checkPass === pass) {
        this.$notify({
          title: '成功',
          type: 'success'
        });
        this.$router.push('/form/step-form/confirm')
      }else{
        this.$notify.error({
          title: '账号或密码错误',
        });
      }
    },
  },
};
</script>
    
    <style scoped>
</style>