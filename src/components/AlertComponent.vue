<template>
    <div class="container_alert" v-if="alert">
        <div v-for="item in listAlert" :key="item.id">
            <a href="#" class="container_alert_card">
                <span class="t1">{{ item.title }}</span>
                <span>{{ item.mensagem }}</span>
            </a>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'AlertComponent',
  setup() {
    const store = useStore();
    const alert = computed(() => store.state.statusAlert);
    const listAlert = computed(() => store.state.listAlert);

    return {
      alert,
      listAlert
    }
  }
}
</script>

<style>
    .container_alert {
        position: absolute;
        top: 55px;
        right: 0;
        width: 300px;
        height: calc(100vh - 55px);
        overflow-y: scroll;
    }

    .container_alert::-webkit-scrollbar { 
        display: none;
    }

    .container_alert_card {
        display: flex;
        flex-direction: column;
        background: #FFF;
        padding: 10px;
        text-decoration: none;
        margin: 2px 0px;
    }

    .container_alert_card .t1 {
        font-weight: 600;
    }

    .container_alert_card span {
        display: block;
        font-size: 1em;
        font-weight: 500;
        color: #000;
     }
</style>