<template>
  <div class="container_header">
    <div class="container_header_button_nav">
      <button @click="navStatus">
        <img src="../assets/icon_nav.png" alt="">
      </button>
      <span>{{ title }}</span>
    </div>
    <div class="container_header_button_alert_and_search">
      <button @click="alertStatus">
        <span>{{countAlert}}</span>
        <img src="../assets/notifications_24px.png" alt="">
      </button>
      <button>
        <img src="../assets/search_24px.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'HeaderComponent',
  props: ['status'],

  setup() {
    const store = useStore();
    const title = computed(() => store.getters.headerTiltle);
    const countAlert = computed(() => store.getters.countAlert);
    const navStatus = () => { store.state.statusNav = !store.state.statusNav };
    const alertStatus = () => { store.state.statusAlert = !store.state.statusAlert };

    return {
      title,
      navStatus,
      alertStatus,
      countAlert
    }
  }
}
</script>

<style scoped>
  .container_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    background: #053A5A;
  }

  .container_header_button_nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_header_button_nav button {
    background: transparent;
    border: 0px;
    margin: 0px 20px;
    cursor: pointer;
  }

  .container_header_button_nav span {
    font-size: 1em;
    font-weight: 600;
    color: #FFF;
  }

  .container_header_button_alert_and_search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 40px;
  }

  .container_header_button_alert_and_search button {
    background: transparent;
    border: 0px;
    margin: 0px 2px;
    cursor: pointer;
  }

  .container_header_button_alert_and_search button span {
    border-radius: 10px;
    color: #FFF;
    font-size: 1.1em;
    font-weight: 600;
  }
</style>
