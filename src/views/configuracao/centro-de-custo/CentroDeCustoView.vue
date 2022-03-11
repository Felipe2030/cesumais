<template>
  <HomeView>
  <div class="container_centro_de_custo">
    <div class="container_centro_de_custo_filtro">
        <a href="/configuracao">Voltar</a>
        <input type="text" name="pesquisa" id="pesquisa" placeholder="Pesquisar">
    </div>
    <div class="container_centro_de_custo_table">
        <table>
            <thead>
                <tr>
                    <td>#</td>                    
                    <td>CENTRO DE CUSTO</td>
                    <td>DESCRIÇÃO</td>
                    <td class="center">TOTVS</td>
                    <td class="center">SENIOR</td>
                    <td class="center">CESU+</td>
                    <td>CURSO</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listCentroDeCusto" :key="item.id">
                    <td>{{ item.id }}</td>                    
                    <td class="destaque"><a :href="'/configuracao/centro_de_custo/' + item.id">{{ item.num_centro_de_custo }}</a></td>
                    <td>{{ item.descricao }}</td>
                    <td class="center"><img :src="item.id_totvs"></td>
                    <td class="center"><img :src="item.id_senior"></td>
                    <td class="center"><img :src="item.cesumais"></td>
                    <td>{{ item.id_curso_lyceum }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container_paginacao">
        <div>
            <li class="default"><a href="#">Anterior</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">Próximo</a></li>
        </div>
    </div>
  </div>
  </HomeView>
</template>

<script>
import { useStore } from 'vuex'
import HomeView from '@/views/HomeView.vue'

export default {
  components: {
    HomeView
  },

  setup() {
    const store = useStore();
    const dataCentroDeCusto = [
        {
            "id": 1,
            "descricao": "REITORIA",
            "id_totvs": "010|0101",
            "id_senior": "1|0101",
            "estrutura_organizacional_id": 137,
            "is_active": 1,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2022-02-15T14:25:53.348",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 2,
            "descricao": "ESPACO GOURMET",
            "id_totvs": "010|010101",
            "id_senior": "1|010101",
            "estrutura_organizacional_id": 343,
            "is_active": 1,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "01 - PRESENCIAL",
            "dh_update": "2021-08-03T13:35:08.030",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 3,
            "descricao": "AVALIACAO E QUALIDADE INSTITUCIONAL",
            "id_totvs": "010|010102",
            "id_senior": "1|010102",
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "01 - PRESENCIAL",
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 4,
            "descricao": "LABORATORIO DE INOVACAO",
            "id_totvs": "010|010103",
            "id_senior": "1|010103",
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 5,
            "descricao": "VICE-REITORIA",
            "id_totvs": "010|0102",
            "id_senior": "1|0102",
            "estrutura_organizacional_id": 344,
            "is_active": 1,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2021-11-05T08:40:53.296",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 6,
            "descricao": "PRO-REIT. ADMINISTRATIVA",
            "id_totvs": "010|0103",
            "id_senior": null,
            "estrutura_organizacional_id": 348,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "null",
            "unidade_negocio": "null",
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 7,
            "descricao": "DIRETORIA GERAL",
            "id_totvs": "010|01031",
            "id_senior": null,
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": null,
            "unidade_negocio": null,
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 8,
            "descricao": "COORDENACAO ADMINISTRATIVA",
            "id_totvs": "010|0103101",
            "id_senior": "1|0103101",
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 9,
            "descricao": "PMO",
            "id_totvs": "010|0103102",
            "id_senior": "1|0103102",
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2021-06-24T09:00:05.883",
            "dh_insert": "2021-05-04T17:28:39.207"
        },
        {
            "id": 10,
            "descricao": "PMO - PROJETOS E PROCESSOS",
            "id_totvs": "010|010310201",
            "id_senior": "1|010310201",
            "estrutura_organizacional_id": 1,
            "is_active": 0,
            "id_curso_lyceum": null,
            "local_fisico": "01 - CAMPUS MARINGÁ",
            "unidade_negocio": "03 - COMPARTILHADO",
            "dh_update": "2021-11-04T15:21:37.240",
            "dh_insert": "2021-05-04T17:28:39.207"
        }
    ];

    const listCentroDeCusto = dataCentroDeCusto.map(item => {
        let numero_centro_custo = item.id_totvs.split('|');
        let curso  = (item.id_curso_lyceum != null) ? item.id_curso_lyceum : "";
        let totvs  = (item.id_totvs)  ? require('@/assets/icons_sucesso.png') : require('@/assets/icons_erro.png');
        let senior = (item.id_senior) ? require('@/assets/icons_sucesso.png') : require('@/assets/icons_erro.png');
        let cesumais = "";

        if(item.estrutura_organizacional_id == null){   cesumais = require('@/assets/icons_erro.png'); }
        else if(item.estrutura_organizacional_id != 1){ cesumais = require('@/assets/icons_sucesso.png'); } 
        else if(item.estrutura_organizacional_id == 1){ cesumais = require('@/assets/icons_alerta.png'); }

        item.id_curso_lyceum = curso;
        item.id_totvs  = totvs;
        item.id_senior = senior;
        item.cesumais = cesumais;
        item.num_centro_de_custo = numero_centro_custo[1];
        return item
    });

    store.state.title = "Página Configuração Centro de Custo";

    return {
      listCentroDeCusto
    }
  }
}
</script>


<style scoped>
    .container_centro_de_custo {
        width: 100%;
    }

    .container_centro_de_custo_filtro {
        padding: 0px 10px;
        display: flex;
        justify-content: left;
        align-items: center;
        height: 20px;
        margin-top: 10px;
    }

    .container_centro_de_custo_filtro input {
        width: 30%;
        padding: 8px;
        margin-left: 10px;
        border: 0px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
    }

    .container_centro_de_custo_filtro a {
        padding: 6px 18px;
        border: 0px;
        background: #09A8BB;
        color: #fff;
        font-weight: 600;
        border-radius: 2px;
        cursor: pointer;
    }

    .container_centro_de_custo .container_centro_de_custo_table {
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        background-color: #FFFFFF;
        padding: 10px;
        margin: 14px 10px 10px 10px;
    }

    .container_centro_de_custo .container_centro_de_custo_table table {
        width: 100%;
    }

    .container_centro_de_custo .container_centro_de_custo_table table thead tr {
        height: 25px;
    }

    .container_centro_de_custo .container_centro_de_custo_table table thead tr td {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #053a5a;
    }

    .container_centro_de_custo .container_centro_de_custo_table table tbody tr td {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 0px;
        letter-spacing: 0.4px;
        color: #053a5a;
        padding: 10px 0px;
    }

    .container_centro_de_custo .container_centro_de_custo_table table tbody tr td img {
       width: 24px;
       margin: -8px 0px;
    }

    .center {
        text-align: center;
    }

    .destaque a {
        font-weight: 600 !important;
        color: #09A8BB !important;
        cursor: pointer;
    }

    .container_paginacao {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        margin: 10px;
    }

    .container_paginacao div {
        display: flex;
    }

    .container_paginacao div li {
        list-style: none;
        padding: 6px 10px;
        margin: 0px 5px;
        background: #053A5A;
        opacity: 50%;
        border-radius: 2px;
    }

    .default {
        background: #053A5A;
        opacity: 20% !important;
    }

    .active {
        background: #053A5A;
        opacity: 100% !important;
    }

    .container_paginacao div li a {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #ffffff;
    }
</style>