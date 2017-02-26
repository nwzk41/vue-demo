<template>
  <div class="list">
    <ul id="container">
    	<li v-for="x in list">
    		<router-link :to="{path: '/xiangqing',query:{id:x.id,img:x.img,name:x.name}}">
    		<img v-lazy="x.img" alt=""/>
    		<p>{{x.name}}</p>	
    		</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list:[]
    }
  },
  props:['type'],
  mounted(){
  	var type = this.type||"天天特价";
  	this.$http.get('http://h5.yztctech.net/api/axf/apicategory.php?category='+type)
  	.then(res =>{
  		this.list =JSON.parse(res.body).data;
  	},res=>{
  		
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>