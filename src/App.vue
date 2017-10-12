<template>
  <div id="app" class="page-wrapper">
    <router-view class="view"></router-view>
    <router-view class="view" name="login"></router-view>
  </div>
</template>

<script>
import login from '@/views/Login'
export default {
  name: 'app',
  watch: {
      '$route' (to, from) {
        const path = to.name
        if (name !== 'login') {
          document.body.style.overflow = 'scroll';
          document.body.style.overflowX = 'visible';
          document.body.style.overflowY = 'visible';
        }
      }
  }
}
</script>

<style>

</style>
