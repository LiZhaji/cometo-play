<template>
  <div class="records">
    <div class="record clear-fix" v-for="record in records">
      <img :src="record.imgUrl" alt="游戏图标">
      <div class="right">
        <div class="clear-fix" > <span class="title">{{record.title}}</span><span class="duration">{{record.duration}}</span></div>
        <div class="bottom"><span class="time">{{record.time}}</span></div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "Records",
    data(){
      return{
        records:[
          {
            imgUrl: require('../../../assets/2048avatar.jpg'),
            title: '2048',
            time: '2019-05-12 19:43~19：51',
            duration: '8min',
            angry: 4
          },
          {
            imgUrl: require('../../../assets/2048avatar.jpg'),
            title: '2048',
            time: '2019-05-12 19:43~19：51',
            duration: '19min',
            angry: 4
          },
          {
            imgUrl: require('../../../assets/2048avatar.jpg'),
            title: '2048',
            time: '2019-05-12 19:43~19：51',
            duration: '11min',
            angry: 4
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .records{
    text-align: center;
  }
  .record{
    background-color: rgba(205, 230, 255, 0.26);
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
  }
  img{
    margin: 0 20px 0 0;
    width: 60px;
    height: 60px;
    max-width: 25%;
    border-radius: 5px;
    float: left;
  }
  .right{
    float: left;
    text-align: left;
    width: 72%;
  }
  .title{
    font-size: 18px;
    font-weight: 600;
  }
  .duration{
    font-size: 18px;
    font-weight: 600;
    float: right;
    margin-right: 10px;
  }
  .bottom{
    margin-top: 10px;
  }
</style>
