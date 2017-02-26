import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from 'pages/home'
import Market from 'pages/market'

import Cart from 'pages/cart'
import Mine from 'pages/mine'
import Xiangqing from 'pages/xiangqing'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
	    children:[
	    	{
	    		path:'/',
	    		component: require("../pages/marketPages/price")
	    	},
	    	{
	    		path:'price',
	    		component: require("../pages/marketPages/price")
	    	},
	    	{
	    		path:'rank',
	    		component: require("../pages/marketPages/rank")
	    	},
	    	{
	    		path:'milk',
	    		component: require("../pages/marketPages/milk")
	    	},
	    	{
	    		path:'fruit',
	    		component: require("../pages/marketPages/fruit")
	    	}
	    ]

  },
   {
    path: '/cart',
    name: 'Cart',
    component: Cart
		},
		{
		    path: '/mine',
		    name: 'Mine',
		    component: Mine
		   },
		{
    path: '/xiangqing',
    name: 'Xiangqing',
    component: Xiangqing
    }
    
  ]
})
