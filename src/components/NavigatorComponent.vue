<template>
  <div class="container_navigator" v-if="status">
    <div class="container_navigator_logo">
        <img src="../assets/imagem-home-logo.png" alt="logo">
    </div>
    <div class="container_navigator_descrition">
      <div class="container_navigator_descrition_image">
        <img src="../assets/imagem-avatar.png" alt="foto">
      </div>
      <div class="container_navigator_descrition_office">
        <span class="t1">Alander Hermini</span><br>
        <span class="t2">Diretor de GRC</span>
      </div>
      <div class="container_navigator_descrition_logout">
        <button @click="logout">
          <img src="../assets/icon_logout.png" alt="logout">
        </button>
      </div>
    </div>
    <div class="container_nivigator_list">
      <ul>
          <li><router-link  to="/home" active-class="container-home-nav-list__active">Página Inicial</router-link></li>
          <li><router-link  to="/meu" active-class="container-home-nav-list__active">MEU</router-link></li>
          <li><router-link  to="/radar" active-class="container-home-nav-list__active">Radar da Qualidade</router-link></li>
          <li><router-link  to="/cesumais" active-class="container-home-nav-list__active">Programa Cesu+</router-link></li>
          <li><router-link  to="/grc" active-class="container-home-nav-list__active">Painel do GRC</router-link></li>
          <li><router-link  to="/comex" active-class="container-home-nav-list__active">Comex</router-link></li>
          <li><router-link  to="/configuracao" active-class="container-home-nav-list__active">Configurações</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'NavigatorComponent',
  setup() {
    const store = useStore();
    const status = computed(() => store.getters.navStatus);
    const logout = () => location.href = '/';

    return {
      status,
      logout
    }
  }
}
</script>

<style>
    .container_navigator {
        width: 300px; 
        height: 100vh;
        background: #FFFFFF;  
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
        0px 6px 30px rgba(0, 0, 0, 0.12),
        0px 8px 10px rgba(0, 0, 0, 0.2);
    }

    .container_navigator_logo {
        width: 100%;
        height: 84px;
        background: #053A5A;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_navigator_descrition {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .container_navigator_descrition_image {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 0px 0px 0px 30px;
    }

    .container_navigator_descrition_image img {
      width: 100%;
      height: 100%;
    }

    .container_navigator_descrition_office {
      margin: 30px 0px;
    }

    .container_navigator_descrition_office .t1 {
      font-size: 1em;
      font-weight: 600;
      color: #000000;
    }

    .container_navigator_descrition_office .t2 {
      font-size: 0.8em;
      font-weight: 500;
      color: #000000;
    }

    .container_navigator_descrition_logout {
      margin: 0px 30px 0px 0px;
    }

    .container_navigator_descrition_logout button {
      background: transparent;
      border: 0px;
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    .container_navigator_descrition_logout button img {
      width: 100%;
      height: 100%;
    }

    .container_nivigator_list ul a{
        display: flex;
        align-items: center;
        border-left: 4px solid transparent;
    }

    .container_nivigator_list ul a:hover{
        background: rgba(5, 58, 90, 0.2);
        border-left: 4px solid #053A5A;
    }

    .container_nivigator_list ul  a{
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: rgba(0, 0, 0, 0.6);
        padding: 8px 20px;
        cursor: pointer;
    }

    .container_nivigator_list ul a:hover{
        color: #053A5A;
    }
    
    .container-home-nav-list__active{
        background: rgba(5, 58, 90, 0.2);
        border-left: 4px solid #053A5A !important;
        color: #053A5A !important;
    }
</style>