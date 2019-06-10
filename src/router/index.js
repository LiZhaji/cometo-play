import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/login/Login";
import Content from "../views/homepage/Content";
import MyGames from "../views/homepage/myGames/MyGames";
import Records from "../views/homepage/records/Records";
import Personal from "../views/homepage/personal/Personal";
import Torn from "../views/game/torn/Torn";
import BoardView from "../views/game/2048/BoardView";
import cover from "../views/game/2048/cover";
import whiteBlack from "../views/game/white-block/index";
import game from "../views/game/white-block/game";
import Upgame from "../views/homepage/upgame/UpGame";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
      redirect: '/content/myGames',
      children:[
        {
          path: '/content/myGames',
          component: MyGames
        },
        {
          path: '/content/records',
          component: Records
        },
        {
          path: '/content/personal',
          component: Personal
        },
        {
          path: '/content/upGame',
          component: Upgame
        }
      ]
    },
    {
      path: '/torn',
      name: 'Torn',
      component: Torn
    },
    {
      path: '/2048/boardView',
      name: 'BoardView',
      component: BoardView
    },
    {
      path: '/2048/cover',
      name: 'cover',
      component: cover
    },
    {
      path: '/whiteBlack/cover',
      name: 'whiteBlack',
      component: whiteBlack
    },
    {
      path: '/whiteBlack/game',
      name: 'whiteBlackGame',
      component: game
    },

  ]
})
