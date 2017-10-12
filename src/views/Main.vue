<template>
  <div id="app" class="page-wrapper">
    <page-header></page-header>
    <clear-fix></clear-fix>
    <!-- BEGIN CONTAINER -->
        <div class="page-container">
          <sidebar></sidebar>
          <div class="page-content-wrapper">
            <div class="page-content">
              <!-- <theme-panel></theme-panel> -->
              <page-bar></page-bar>
              <router-view></router-view>
            </div>
          </div>
        </div>
    <!-- END CONTAINER -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import clearFix from '@/components/clearFix'
import sidebar from '@/components/sidebar'
import themePanel from '@/components/themePanel'
import pageBar from '@/components/pageBar'
import pageFooter from '@/components/pageFooter'
export default {
  name: 'app',
  components: {
    pageHeader,
    clearFix,
    sidebar,
    themePanel,
    pageBar,
    pageFooter
  },
  data () {
      return {
      }
  }
}
</script>

<style>

</style>
