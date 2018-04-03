<template>
  <div class="person">
        <div class="showHead">
            <h2>{{title}}</h2>
            <i class="iconfont icon-drawerchouti ct"></i>
            <i class="iconfont icon-option op"></i>
        </div>
        <div class="perMain">
            <div class="geren">
                <img src="../../assets/demo.jpg" alt="" class="touXiang">
                <h4>{{name}}</h4>
                <span class="account">
                    账号 {{acc}}
                </span>
                <i class="iconfont icon-jiahao more"></i>
            </div>
            <h3 class="orderNa">{{orderName}}</h3>
            <div class="orderClass">
                <ul>
                    <li>
                        <i class="iconfont icon-icon-- talk"></i>
                        <span>会话</span>
                    </li>
                    <li>
                        <i class="chanpin iconfont icon-lifangtilitiduomiantifangkuai"></i>
                        <span>产品</span>
                    </li>
                    <li>
                        <i class="showpin iconfont icon-wujiaoxing"></i>
                        <span>展品</span>
                    </li>
                </ul>
            </div>
            <!-- <div class="fangke">
                <i class="iconfont icon-wode customer"></i>
                <span class="historyFang">
                    访客记录
                </span>
                <i class="iconfont icon-jiahao"></i>
            </div> -->
            <mt-cell title="访客记录" is-link class="fangke">
                <i class="iconfont icon-wode rentou"></i>
            </mt-cell>
    
        </div>
        <foot-menu></foot-menu>
  </div>
</template>

<script type="text/javascript">
import footMenu from '../footer/footerComponent'
import './person.scss'
import { Cell } from 'mint-ui'
export default {
  data () {
      return {
        title:'我',
        name: '客户',
        acc: 123456789123,
        orderName:'翻译订单'
        
      }
  },
  methods: {
      
  },
  computed:{

  },
  components: {
      footMenu
  }
}
</script>
