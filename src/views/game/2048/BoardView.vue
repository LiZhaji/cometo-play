<template>
  <div class="board-out">
    <div class="back" @click="$router.push('/2048/cover')">
      <span>返回</span>
    </div>
    <div class="board"  tabIndex="1" ref="board">
      <div v-for="(r_item, i) in board.cells" :key="i">
        <cell v-for="(c_item,j) in r_item" :key="j"></cell>
      </div>
      <tile-view v-for="(tile,k) in tiles" :tile="tile" :key="k">
      </tile-view>
      <game-end-overlay :board="board" :onrestart="onRestart"></game-end-overlay>
    </div>
  </div>
</template>

<script>
  import Cell from './Cell.vue'
  import TileView from './TileView.vue'
  import GameEndOverlay from './GameEndOverlay.vue'
  import { Board } from './js/board'
  import './css/main.css'
  // import './css/style.scss'
  export default {
    data(){
      return {
        board: new Board()
      }
    },
    mounted(){
      // window.addEventListener('keydown', this.handleKeyDown.bind(this));
      console.log(document.body.offsetWidth)
      this.$refs.board.style.transform=`scale(${document.body.offsetWidth * .9 / 440})`
      this.move()
    },
    beforeDestroy(){
      // window.removeEventListener('keydown', this.handleKeyDown.bind(this));
    },
    computed:{
      tiles(){
        return this.board.tiles
          .filter(tile => tile.value != 0)
      }
    },
    methods:{
      move(){
        let startx, starty;
        //手指接触屏幕
        document.addEventListener("touchstart", function(e) {
          startx = e.touches[0].pageX;
          starty = e.touches[0].pageY;
        }, false);
        document.addEventListener('touchmove',e=>{
          e.preventDefault()
        }, {passive:false})
        //手指离开屏幕
        document.addEventListener("touchend", (e) =>{
          let endx, endy;
          endx = e.changedTouches[0].pageX;
          endy = e.changedTouches[0].pageY;
          this.getDirection(startx, starty, endx, endy);
        })
      },
      //根据起点终点返回方向
      getDirection(startx, starty, endx, endy) {
        const angx = endx - startx;
        const angy = endy - starty;
        //滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
          return
        }
        // 0 -> left, 1 -> up, 2 -> right, 3 -> down
        const angle = this.getAngle(angx, angy);
        if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          this.board.move(0)
        } else if (angle >= -135 && angle <= -45) {
          this.board.move(1)
        } else if (angle >= -45 && angle <= 45) {
          this.board.move(2)
        } else if (angle > 45 && angle < 135) {
          this.board.move(3)
        }
      },
      getAngle(angx, angy) {
        // atan2 反切函数，返回从 x 轴到点 (x,y) 之间的角度,n/PI
        return Math.atan2(angy, angx) * 180 / Math.PI;
      },
      handleKeyDown(event){
        if (this.board.hasWon()) {
          return;
        }
        if (event.keyCode >= 37 && event.keyCode <= 40) {
          event.preventDefault();
          var direction = event.keyCode - 37;
          this.board.move(direction)
        }
      },
      onRestart(){
        this.board = new Board()
      }
    },
    components: {
      Cell,
      TileView,
      GameEndOverlay,
    }
  }
</script>
<style>
  .board-out {
    overflow-x:hidden;
  }
</style>
