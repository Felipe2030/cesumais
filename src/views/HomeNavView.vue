<template>
  <HomeView>
    <div class="container_cesumais">
      <div v-for="item in listNavCesumais" :key="item.id">
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
    const listNavCesumais = computed(() => store.state.listNavCesumais);
    store.state.title = "Página Inicial";

    return {
      listNavCesumais
    }
  }
}
</script>


<style scoped>
  .container_cesumais {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
</style>