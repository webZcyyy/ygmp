<template>
  <div class="footer">
      <ul class="footUl" @click="changeStyle">
          <li>
              <i class="iconfont icon-icon--"></i>
          </li>
          <li>
              <i class="iconfont icon-tongxunlu"></i>
          </li>
            <li>
                <router-link to="/goods">
                    <i class="iconfont icon-lifangtilitiduomiantifangkuai"></i>
                </router-link>
            </li>
          <li>
              <i class="iconfont icon-wujiaoxing"></i>
          </li>
          <li>
              <i class="iconfont icon-wode"></i>
          </li>
      </ul>
  </div>
</template>

<script>
import './footer.scss';
export default {
    data () {
        return {
            
        }
    },
    methods: {
        changeStyle(e) {
            var ul = document.getElementsByClassName('footUl')[0];
            
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName.toLowerCase()==='li'){
                // console.log(target)
                target.style.color = 'green';
                // console.log(index)


            }
            
        }
    },
    mounted () {

    },
    computed: {
        
    }
}
</script>
