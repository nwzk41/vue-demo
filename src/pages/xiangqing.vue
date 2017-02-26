<template>
  <div class="xiangqing">
    {{msg}}==={{ id }}
    <img v-lazy="img" alt=""/>
    <p>{{name}}</p>	
  </div>
</template>

<script>

export default {
  name: 'xiangqing',
  data () {
    return {
      msg: 'xiangqing',
	  	id : this.$route.query.id,
	  	img: this.$route.query.img,
	  	name: this.$route.query.name
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>