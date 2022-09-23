<template>
  <!-- <div></div> -->
  <div>
    <div class="body">
      <div class="sign">
        <div class="left_sign">
          <div class="title_box">
            <h2>注册</h2>
          </div>
          <div class="input_box">
            <el-form>
              <el-input v-model="newuser" placeholder="用户名" />
              <el-input
                v-model="newpassword"
                placeholder="密码"
                show-password
              />
              <el-input
                v-model="newpasswords"
                placeholder="确认密码"
                show-password
              />
              <el-button @click="resign">注册</el-button>
              <p @click="mySwitch">已有账号？登录已有账号</p>
            </el-form>
          </div>
        </div>
        <div class="right_sign">
          <div class="title_box">
            <h2>登录</h2>
          </div>
          <div class="input_box">
            <el-form>
              <el-input placeholder="用户名" v-model="username" />
              <el-input placeholder="密码" v-model="password" show-password />
              <el-button @click="login">登录</el-button>
              <p @click="mySwitch">没有账号？注册新账号</p>
            </el-form>
            <div class="pic_box">
              <h1>WELCOM</h1>
              <p>JOIN US!</p>
              <div class="img_box">
                <img src="./a.jpg" id="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      flag: true,
      newuser: "",
      newpassword: "",
      newpasswords: "",
      username: "123",
      password: "123",
    };
  },

  methods: {
    mySwitch() {
      const inputbox = document.querySelector(".pic_box");
      const img = document.querySelector("#pic");
      if (this.flag) {
        inputbox.style.transform = "translateX(100%)";
        inputbox.style.backgroundColor = "#90d8ee";
        img.src = require("@/views/User/b.jpg");
      } else {
        inputbox.style.transform = "translateX(0%)";
        inputbox.style.backgroundColor = "#e5b7c5";
        img.src = require("@/views/User/a.jpg");
      }
      this.flag = !this.flag;
    },
    login() {
      // // 用户信息验证
      const token = "1";
      // //放入sessionstorage
      sessionStorage.setItem("token", token);
      this.$router.push("/dashboard");
    },
    // async login() {
    //   const res = await axios.post("http://localhost:8081");
    //   const array = res.data;
    //   for (let i = 0; i < array.length; i++) {
    //     if (this.username === array[i].username) {
    //       if (
    //         this.username === array[i].username &&
    //         this.password === array[i].password
    //       ) {
    //         this.$notify({
    //           title: "登录成功",
    //           type: "success",
    //         });
    //         this.$router.push({
    //           name: "home",
    //           params: {
    //             username: this.username,
    //           },
    //         });
    //         return;
    //       } else {
    //         this.$notify.error({
    //           title: "密码输入有误",
    //         });
    //         return;
    //       }
    //     } else {
    //       if (i === array.length - 1) {
    //         this.$notify.error({
    //           title: "账号不存在",
    //         });
    //         return;
    //       }
    //     }
    //   }
    // },
    async resign() {
      if (
        this.newuser === "" ||
        this.newpassword === "" ||
        this.newpasswords === ""
      ) {
        this.$notify.error({
          title: "请输入未填信息",
        });
      } else if (this.newpassword !== this.newpasswords) {
        this.$notify.error({
          title: "密码不一致",
        });
      } else {
        this.$notify({
          title: "注册成功",
          type: "success",
        });
        // eslint-disable-next-line no-unused-vars
        const res = await axios.post(
          `http://localhost:8081/sign?username=${this.newuser}&password=${this.newpassword}`
        );
      }
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, rgb(248, 176, 188), rgb(125, 223, 247));
}

.sign {
  width: 1050px;
  height: 600px;
  position: relative;
  display: flex;
  margin: auto;
}

.left_sign {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.right_sign {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.title_box {
  height: 250px;
  line-height: 400px;
  display: flex;
  justify-content: center;
}

.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pic_box {
  position: absolute;
  width: 525px;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5b7c5;
  color: rgb(255, 255, 255);
  transition: 0.5s ease-in-out;
}

.pic_box h1 {
  margin-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 5px;
}

.pic_box p {
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 5px;
}

.img_box {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.img_box img {
  width: 100%;
  transition: 0.5s;
}

.el-input {
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid pink;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.input_box p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: white;
}

.input_box:hover {
  cursor: pointer;
  border-bottom: 1px solid white;
}
</style>