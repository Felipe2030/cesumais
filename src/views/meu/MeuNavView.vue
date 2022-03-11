<template>
    <div class="container_meu">
      <div v-for="item in listNavMeu" :key="item.id">
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
    const listNavMeu = computed(() => store.state.listNavMeu);
    store.state.title = "Página Meu";

    return {
      listNavMeu
    }
  }
}
</script>


<style scoped>
  .container_meu {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
</style>