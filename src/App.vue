<template>
  <div id="app">
    <ul class="footer" v-on:click="tab">
    	<router-link to="/home"><li>首页</li></router-link>
    	<router-link to="/market"><li>闪送超市</li></router-link>
    	<router-link to="/cart"><li>购物车</li></router-link>
    	<router-link to="/mine"><li>我的</li></router-link>
    </ul>
    <router-view class="pageCon"></router-view>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'app',
  methods:{
  	tab: function(e){
  		console.log($(e.target) );
//		e.target.style.color="white";
			$("li").css({color:"white"})
  		$(e.target).css({color:"red"})
  		
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
*{
	padding: 0;
	margin: 0;
	font-family: "微软雅黑";
}
a{
	text-decoration: none;
}
.pageCon{
	width: 100%;
	height: 621px;
	/*border: 1px solid #ccc;*/
	overflow: auto;
}
.footer{
	position: fixed;
	height: 46px;
	line-height: 46px;
	width: 100%;
	background-color: #eee;
	list-style: none;
	text-align: center;
	bottom: 0;
	display: flex;
	justify-content: space-around;
}
.footer li{
	width: 100%;
}
.footer a{
	text-decoration: none;
}
</style>
