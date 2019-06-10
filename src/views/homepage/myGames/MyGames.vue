<template>
  <div class="my-games">
<!--    <div class="bg"><span class="more-game">更多游戏敬请期待~</span></div>-->
    <div class="outer">
      <div class="game" @click="$router.push('/2048/cover')">
        <img src="../../../assets/2048avatar.jpg" alt="游戏图标">
        <p>2048</p>
      </div>
      <div class="game" @click="$router.push('/whiteBlack/cover')">
        <img src="../../../assets/white-block-avatar.jpg" alt="游戏图标">
        <p>踩白块</p>
      </div>
      <div class="game" @click="$router.push('/torn')">
        <img class="unlock" src="../../../assets/2.jpg" alt="游戏图标">
        <p>撕纸巾</p>
      </div>
      <!--    <div class="game" @click="openVip">-->
      <!--      <img class="unlock" src="../../../assets/flappy-avatar.jpg" alt="游戏图标">-->
      <!--      <p>像素鸟</p>-->
      <!--    </div>-->
      <div class="game" @click="openVip">
        <img class="unlock" src="../../../assets/music-avatar.jpg" alt="游戏图标">
        <p>造音乐</p>
      </div>
      <div class="game" @click="openVip">
        <img class="unlock" src="../../../assets/monster-avatar.jpg" alt="游戏图标">
        <p>小怪兽</p>
      </div>
      <div class="game" @click="openVip">
        <img class="unlock" src="../../../assets/ball-avatar.jpg" alt="游戏图标">
        <p>热气球</p>
      </div>
    </div>
    <p class="more-game">更多游戏敬请期待~</p>
  </div>
</template>

<script>
  export default {
    name: "myGames",
    methods:{
      openVip(){
        alert('开通会员后体验该游戏~')
      }
    }
  }
</script>

<style scoped>
.my-games{
  padding: 10px;
  min-height: 70vh;
  background-color: rgba(205, 230, 255, 0.26);
  text-align: center;
  overflow: auto;
}
.bg{
  position: absolute;
  left: 20px;
  right: 20px;
  top: 150px;
  bottom: 20px;
  border-radius: 5px;
  text-align: center;
  z-index: -1;
}
.more-game{
  color: gray;
  padding-top: 20px;
}
.outer{
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
  .game{
    margin: 15px;

  }
  img{
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
  .unlock{
    filter: brightness(.3);
  }
</style>
