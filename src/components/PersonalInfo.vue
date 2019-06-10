<template>
    <div class="personal-info clear-fix">
      <div class="words">
        <p class="name">炸鸡呀</p>
        <p class="tip">每天都要好心情~</p>
      </div>
      <img src="../assets/avatar.png" alt="头像" class="avatar">
    </div>
</template>

<script>
  export default {
    name: "PersonalInfo"
  }
</script>

<style scoped>
  .words{
    display: inline-block;
    }
.name{
  font-size: 20px;
  font-weight: 600;
}
.tip{
  font-size: 14px;
  color: gray;
}
.avatar{
  width: 60px;
  height: 60px;
  border-radius: 20px;
  float: right;
}
</style>
