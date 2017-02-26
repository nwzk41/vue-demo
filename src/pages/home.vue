<template>
  <div class="home">
  	<swiper :options="swiperOption" ref="mySwiperA" class="homeSwiper">
		   <!--幻灯内容--> 
		  <swiper-slide v-for="x in swiperList"><img :src="x.activity.img" alt="" /></swiper-slide>
		  <!-- ... -->
		  <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
		  <!--<div class="swiper-pagination"  slot="pagination"></div>-->
		  <div class="swiper-scrollbar"   slot="scrollbar"></div>
		</swiper>
    {{msg}}
    <ul id="container" v-infinite-scroll='loadMore' infinite-scroll-disabled="loading"
    	infinite-scroll-distance="10">
    	<li v-for="x in newList">
    		<router-link :to="{path: '/xiangqing',query:{id:x.id,img:x.img,name:x.name}}">
    				<img v-lazy="x.img" alt=""/>
    				<p>{{x.name}}=={{x.id}}</p>	
    		</router-link>
    	</li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: 'App',
      list: [],
      newList:[],
      swiperList:[],
      swiperOption: {
        // 所有配置均为可选（同Swiper配置） 
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true) 
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true） 
        notNextTick: true,
        autoplay: 2000,
        grabCursor : true,
        setWrapperSize :true,
//      autoHeight: true,
//      pagination : '.swiper-pagination',
        paginationClickable :true,
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this 
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger 
        debugger: true,
        // swiper callbacks 
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样 
        onTransitionStart(swiper){
//        console.log(swiper)
        }
    }
  }},
  methods:{
  	loadMore() {
		  this.loading = true;
		  setTimeout(() => {
		    
//		    console.log(last)
		    for (let i = 1; i <= 10; i++) {
		    	let last = this.list[this.list.length - i];
		      this.newList.push(last);
		    }
		    this.loading = false;
		  }, 2500);
		},
		push(){
			this.newList=this.list.slice(0,10)
		}
  },
  mounted(){
  	this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php').then(res=>{
		  		// 响应成功回调
			 this.swiperList=res.body.data.slide
		  	}, res=>{
			// 响应错误回调
		});
  	this.$http.get('http://h5.yztctech.net/api/axf/apihomehot.php').then(res=>{
		  		// 响应成功回调
		  		
			 this.list=JSON.parse(res.body).data;
			 this.push()
		  	}, res=>{
			// 响应错误回调
		});
		
  }
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.home{
			width: 100%;
			height: calc(100%-46px);
		}
		.homeSwiper{
			width: 100%;
			height: 200px;
		}
		.homeSwiper img{
			width: 100%;
			height: 100%;
		}
		
</style>


