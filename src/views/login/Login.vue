<template>
  <div id="home-page" class="home-page">
    <div class="bg"></div>
    <div class="title">
      <p>Cometo Play</p>
      <p class="tip">解压，创造属于你的世界</p>
    </div>
    <div class="login" v-if="isLogin">
      <form @submit.prevent="login">
        <div><span>用户名</span><input v-model="username" id="userName" type="text"></div>
        <div><span>密码</span><input v-model="password" id="password" type="password"></div>
        <button>登录</button>
      </form>
      <span class="jump" @click="isLogin = false">没有账号？戳我注册</span>
    </div>
    <div class="register" v-if="!isLogin">
      <form @submit.prevent="register">
        <div class="outer">
          <div><span>用户名</span><input id="newUserName" type="text"></div>
          <div><span>密码</span><input id="newUserPwd" type="password"></div>
          <div><span>电话号码</span><input id="newUserPhone" type="text"></div>
          <div><span>邮箱</span><input id="newUserEmail" type="text"></div>
        </div>
        <button>注册</button>
      </form>
      <span class="jump" @click="isLogin = true">已有账号？戳我登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      isLogin: true,
      username: 'lee',
      password: 123
    }
  },
  methods: {
    login() {
      if(this.username == 'lee' && this.password == 123){
        this.$router.push('/content')
      }
    },
    register() {
      this.$router.push('/content')
    }
  }
}
</script>

<style scoped>

  .home-page {
    height: 100%;
    color: #e9e9e9;
    padding: 20px;
    position: relative;
  }
  .bg{
    background: url("../../assets/login-bg1.jpg");
    background-size: auto;
    filter: brightness(50%);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .login,
  .register {
    width: 90%;
    background: transparent;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #dcdcdc;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    margin: 20px;
    text-align: center;
  }
  .tip{
    font-size: 16px;
    font-weight: normal;
  }
  .login>form>div,
  .register .outer>div{
    background: rgba(128, 128, 128, 0.58);
    border: 1px solid lightgray;
    box-shadow: 0px 0px 10px 0px lightgray;
    border-radius: 30px;
    margin: 20px;
  }

  .login div > span,
  .outer div > span {
    display: inline-block;
    width: 60px;
    text-align: left;
    font-size: 14px;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    width: 60%;
    height: 30px;
    margin: 10px 0px;
    padding: 2px 0px;
    color: #dcdcdc;
  }

  button {
    outline: none;
    width: 90%;
    font-size: 18px;
    border: 1px solid transparent;
    padding: 15px 40px;
    border-radius: 30px;
    margin: 20px;
    color: white;
    background: linear-gradient(rgb(241, 37, 41), rgb(218, 76, 71), rgb(238, 103, 93));
  }

  .jump {
    display: block;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;

  }
</style>
