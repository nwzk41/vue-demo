<template>
  <div class="market">
    <ul class="header">
    	<li><router-link to="/market/price">天天特价</router-link></li>
    	<li><router-link to="/market/rank">热销榜</router-link></li>
    	<li><router-link to="/market/milk">牛奶面包</router-link></li>
    	<li><router-link to="/market/fruit">优选水果</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'market'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		width: 100%;
		height: 46px;
		line-height: 46px;
		background-color: #42B983;
		display: flex;
		justify-content: space-around;
		list-style: none;
		position: fixed;
		top: 0;
	}
	.header a{
		text-decoration: none;
		color: white;
	}
</style>
