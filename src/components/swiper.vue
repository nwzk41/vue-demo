<swiper v-ref:swiper
        direction="horizontal"
        :mousewheel-control="true"
        :performance-mode="false"
        :pagination-visible="true"
        :pagination-clickable="true"
        :loop=“true”
        @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
</swiper>

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
  	
  },
  methods: {
        onSlideChangeStart (currentPage) {
            console.log('onSlideChangeStart', currentPage);
        },
        onSlideChangeEnd (currentPage) {
            console.log('onSlideChangeEnd', currentPage);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>