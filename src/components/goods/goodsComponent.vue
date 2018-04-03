<template>
  <div class="goods">
      <div class="homeHead">
            <h2>{{title}}</h2>
            <i class="iconfont icon-jiahao fangda"></i>
        </div>
      <div class="goodsMain">
          
      </div>
      <footer-menu></footer-menu>
  </div>
</template>
<script>
    import footerMenu from '../footer/footerComponent'
    import './goods.scss'
    export default {
        data () {
            return {
                title:'产品架'
            }
        },
        mounted () {
            
        },
        methods:{

        },
        computed: {
            
        },
        components: {
            footerMenu
        }
    }

</script>