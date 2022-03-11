<template>
  <HomeView>
  <div class="container_configuracao">
    <div v-for="item in listNavCesumaisConfiguracao" :key="item.id">
      <CardComponent :link="item.link" :title="item.title" :image="item.image" />
    </div>
  </div>
  </HomeView>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import HomeView from '@/views/HomeView.vue'

export default {
  components: {
    HomeView,
    CardComponent
  },

  setup() {
    const store = useStore();
    const listNavCesumaisConfiguracao = computed(() => store.state.listNavCesumaisConfiguracao);
    store.state.title = "Página Configuração";

    return {
      listNavCesumaisConfiguracao
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