<template>
    <div class="gdsTr">
        <mt-header title="产品翻译">
            <router-link to="/person" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待付款</mt-tab-item>
            <mt-tab-item id="2">翻译中</mt-tab-item>
            <mt-tab-item id="3">以完成</mt-tab-item>
            <mt-tab-item id="4">已取消</mt-tab-item>
        </mt-navbar>
        
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 5" :title="'内容' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 5" :title="'翻译' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 5" :title="'完成' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell v-for="n in 50" :title="'取消' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>

</template>

<script type="text/javascript">
import './gdsTranslate.scss'
import { Header, Navbar, TabItem } from 'mint-ui'

export default {
  data() {
      return {
          selected:''
      }
  },
  mounted () {
      
  },
  methods: {

  },
  computed: {
      
  }
}
</script>
