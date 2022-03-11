<template>
  <div class="container_home">
    <div>
      <NavigatorComponent />
    </div>
    <div class="container_home_header">
      <HeaderComponent />
      <div class="container_home_header_content">
        <AlertComponent />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavigatorComponent from '@/components/NavigatorComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    NavigatorComponent,
    AlertComponent
  }
}
</script>

<style scoped>
.container_home {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.container_home_header {
  width: 100%;
  height: 100vh;
}

.container_home_header_content {
  overflow-y: scroll;
  height: calc(100vh - 55px);
  padding: 16px;
}
</style>