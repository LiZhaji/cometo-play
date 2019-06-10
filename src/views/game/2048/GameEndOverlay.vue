<template>
  <div class="overlay" v-show="show">
    <p class="message">{{contents}}</p>
    <button class="tryAgain" @click="restart" >再试一次</button>
  </div>
</template>

<script>

  export default{
    data(){
      return{

      }
    },
    props:{
      board:{
        type:Object,
        required:true
      },
      onrestart:{
        type:Function,
        required:true
      }
    },
    computed:{
      show(){
        return this.board.hasWon() || this.board.hasLost()
      },
      contents(){
        if(this.board.hasWon()){
          return '赞!'
        }else if(this.board.hasLost()){
          return '游戏结束'
        }else {
          return ''
        }
      }
    },

    methods:{
      restart(){
        this.onrestart && this.onrestart()
      }
    },
    components:{

    }
  }
</script>
