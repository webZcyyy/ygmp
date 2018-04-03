<template>
    <div class="home">
        <div class="homeHead">
            <h2>{{title}}</h2>
            <i class="iconfont icon-fangdajing fangda"></i>
        </div>
        <main class="homeMain">
            <div class="homeContext">
                <img src="../../assets/demo.jpg">
                <div class="m1">
                    <span>阳光团队</span>
                    <p>2018年3月30日</p>
                </div>
            </div>
        </main>
        <footerMenu></footerMenu>
    </div>
</template>

<script type="text/javascript">
    import './home.scss' 
    // import '../../untils/font/iconfont'
    import footerMenu from '../footer/footerComponent'
    export default{
        data () {
            return{
                title:'阳光名片'
            }
        },
        methods: {
            
        },
        components: {
            footerMenu
        },
        mounted () {
            
        },
        computed: {
            
        },
        mounted () {
            
        }
    }

</script>