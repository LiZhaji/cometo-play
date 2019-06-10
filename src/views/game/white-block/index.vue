<template>
  <div class="cover">
    <div class="outer">
      <div class="backup" @click="$router.push('/content/myGames')">
        <span>返回</span>
      </div>
      <div class="play" :class="{'touching': btnTouching}" @touchstart.stop="btnTouching=true"  @touchend.stop="startGame" @click="$router.push('/whiteBlack/game')">开始游戏</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        btnTouching: false
      }
    },
    methods: {
      startGame () {
        this.btnTouching = false
        this.$router.push('/whiteBlack/game')
      }
    },
  }
</script>

<style scoped>
  .cover{
    background: url("../../../assets/white-block.jpg");
    height: 100%;
    text-align: center;

  }
  .outer{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
  }
  .backup{
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid #a89d8d;
    border-radius: 5px;
    background-color: black;
    color: white;
    margin: 20px;
  }
  .play{
    padding: 10px 35px;
    background-color: black;
    border: 1px solid #a89d8d;
    border-radius: 5px;
    color: white;
  }
</style>

