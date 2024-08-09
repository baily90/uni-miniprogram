<script>
import { addRequestInterceptor, addRouterInterceptor } from '@/utils/interceptor'
export default {
  onLaunch: function () {
    console.log('App Launch')
    addRequestInterceptor()
    addRouterInterceptor()
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import '@climblee/uv-ui/theme.scss';
@import '@climblee/uv-ui/index.scss';
page {
  background-color: #f8f8f8;
}
</style>
