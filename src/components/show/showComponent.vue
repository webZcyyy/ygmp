<template>
    <div class="show">
        <div class="showHead">
            <h2>{{title}}</h2>
            <i class="iconfont icon-icon xinfeng"></i>
            <i class="iconfont icon-xiangji pic"></i>
        </div>
        <div class="showMain">

        </div>
        <footer-menu></footer-menu>
    </div>
</template>

<script type="text/javascript">
    import footerMenu from '../footer/footerComponent.vue';
    import './show.scss'
    export default {
        data () {
            return {
                title:'展览会'
            }
        },
        methods: {
            
        },
        computed: {
            
        },
        components: {
            footerMenu
        }
    }
</script>