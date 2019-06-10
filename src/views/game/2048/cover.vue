<template>
  <div class="cover">
    <div class="outer">
      <div class="backup" @click="$router.push('/content/myGames')">返回</div>
      <div class="play" @click="$router.push('/2048/boardView')">开始游戏</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "2048cover"
  }
</script>

<style scoped>
.cover{
  background: url("../../../assets/2048cover.jpg");
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
  border: 1px solid cornflowerblue;
  border-radius: 5px;
  background-color: rgba(100, 149, 237, 0.82);
  color: white;
  margin: 20px;
}
  .play{
    padding: 10px 35px;
    background-color: rgba(176, 184, 89, 0.88);
    border: 1px solid #857c70;
    border-radius: 5px;
    color: white;
  }
</style>
