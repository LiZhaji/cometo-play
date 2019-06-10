<template>
  <div class="nav">
    <div :class="{active: $route.path === '/content/myGames'}"><router-link to="/content/myGames">我的游戏</router-link></div>
    <div :class="{active: $route.path === '/content/upGame'}"><router-link to="/content/upGame">上传游戏</router-link></div>
    <div :class="{active: $route.path === '/content/records'}"><router-link to="/content/records">粉碎记录</router-link></div>
    <div :class="{active: '/content/personal'=== $route.path}"><router-link to="/content/personal">个人资料</router-link></div>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  .nav{
    margin: 10px 0;
    background-color: #ffece3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
  }
  .nav>div{
    height: 30px;
    text-align: center;
    padding: 10px 0px;
    flex-grow: 1;
    border-radius: 5px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  a:active,
  a:focus,
  .active{
    background-color: #dbbfb1;

  }
  .router-link-exact-active,
  .router-link-active{
    background: none;
  }
</style>
