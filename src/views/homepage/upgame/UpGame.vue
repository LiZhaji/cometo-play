<template>
  <div class="up-game">
      <div class="add"> <span class="iconfont icon-addcontacts "></span></div>
    <div class="upped">
      <p class="title">已上传的游戏</p>
      <div class="games">
        <div class="game" @click="$router.push('/whiteBlack/cover')">
          <img src="../../../assets/white-block-avatar.jpg" alt="游戏图标">
          <p>踩白块</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Upgame"
  }
</script>

<style scoped>
  .up-game{
    padding: 10px;
    min-height: 70vh;
    background-color: rgba(205, 230, 255, 0.26);
    text-align: center;
    overflow: auto;
  }
 .add{
   display: inline-block;
   background-color: #ffa29e;
   border-radius: 50px;
   cursor: pointer;
 }
  .icon-addcontacts{
    color: white;
    font-size: 50px;
  }
  .upped{
    text-align: left;
  }
  .upped .title{
    margin: 20px 0;
  }
  .game{
    text-align: center;
    display: inline-block;
  }
  img{
    width: 60px;
    height: 60px;
  }
</style>
