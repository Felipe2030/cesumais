<template>
  <div class="container_configuracao">
    <div v-for="item in listNavMeuConfiguracao" :key="item.id">
      <CardComponent :link="item.link" :title="item.title" :image="item.image" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default {
  components: {
    CardComponent
  },

  setup() {
    const store = useStore();
    const listNavMeuConfiguracao = computed(() => store.state.listNavMeuConfiguracao);
    store.state.title = "Página Meu Configuração";

    return {
      listNavMeuConfiguracao
    }
  }
}
</script>


<style scoped>
  .container_configuracao {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
</style>