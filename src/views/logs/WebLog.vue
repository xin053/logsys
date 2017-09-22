<template>
<div>
<!-- BEGIN PAGE TITLE-->
    <h1 class="page-title"> 一级标题
        <small>二级标题</small>
    </h1>
    <!-- END PAGE TITLE-->
    <!-- END PAGE HEADER-->
    <div class="alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        <strong>Warning!</strong> 这是一条提示消息
    </div>

    {{ statistics }}
    Weblog

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
	...mapGetters([
	  'statistics'
	])
  },
  mounted() {
	this.$store.dispatch('getStatisticsAPI')
  }
}
</script>

<style>
</style>