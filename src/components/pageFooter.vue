<template>
    <div class="page-footer">
        <div class="page-footer-inner"> {{ year }} &copy;
            <a href="http://www.wxchina.com" target="_blank"><img style="width: 24px; height: 24px;" src="../../static/images/xuanwu.ico" ng-src="../../static/images/xuanwu.ico">&nbsp;广州市玄武无线科技股份有限公司</a>
        </div>
        <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>