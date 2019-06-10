<template>
  <div class="personal">
    <section class="expend">
      <div class="red-bag">游戏解锁券  <p><span>5个未使用</span><svg class="icon"><use xlink:href="#icon-hongbao"></use></svg></p></div>
      <div class="movie">钱包  <p><span>金币、余额</span><svg class="icon"><use xlink:href="#icon-movie-staff"></use></svg></p></div>
    </section>
    <section class="vip">
      <span class=" super-vip"><span class="iconfont icon-vip"></span>超级会员</span>
      <span class="vip-get">开通后，小游戏统统 <span class="strong">免费</span> 玩 > </span>
    </section>
    <section class="operation">
      <div class="collection clear-fix" @click="toBuild"><span class="iconfont icon-tuanduicankaoxian-3"></span>我的收藏 <span> > </span></div>
      <div class="customer-service clear-fix" @click="toBuild"><span class="iconfont icon-kefu2"></span>我的客服 <span> > </span></div>
      <div class="tuijian clear-fix" @click="toBuild"><span class="iconfont icon-tuijian"></span>推荐有奖 <span> > </span></div>
      <div class="hezuo clear-fix" @click="toBuild"><span class="iconfont icon-hezuo-tianchong"></span>商务合作 <span> > </span></div>
      <div class="setting clear-fix" @click="toBuild"><span class="iconfont icon-seeting"></span>设置 <span> > </span></div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Personal",
    methods:{
      toBuild(){
        this.$router.push({
          path: '/main/build',
          query: {
            from: 'personal'
          }
        })
      }
    }
  }
</script>

<style scoped>
  .operation{
    margin-top: 20px;
  }
  .operation>div{
    padding: 10px 5px;
    margin: 10px 5px;
    font-size: 17px;
    height: 5%;
  }
  .operation>div>span:last-child{
    float: right;
  }
  .operation .iconfont{
    color: cornflowerblue;
    margin-right: 20px;
    font-size: 25px;
  }
  .clear-fix:before,
  .clear-fix:after{
    content: '';
    display: table;
    clear: both;
  }
  .personal{
    text-align: left;
  }
  .vip{
    background: rgba(239, 197, 56, 0.55);
    background: linear-gradient(left, rgba(239, 197, 56, 0.55), rgba(239, 197, 56, 0.85));
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
  }
  .vip .super-vip{
    display: inline-block;
    font-family: "Agency FB";
    font-weight: bold;
    margin-left: 20px;
  }
  .vip .icon-vip{
    margin-right: 10px;
    color: rgba(157, 129, 37, 0.85);
  }
  .vip .vip-get{
    font-size: 13px;
    float: right;
    margin-top: 3px;
  }
  .vip .strong{
    color: red;
    font-size: 15px;
  }
  .expend{
    /*display: flex;*/
    justify-content: space-between;
    margin-top: 10px;
  }
  .expend>div{
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    height: 90px;
    background: #f7f7f7;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
  }
  .expend p span{
    font-size: 12px;
  }
  .expend svg{
    margin-left: 20px;
    font-size: 25px;
    width: 10px;
    height: 10px;
  }
</style>

