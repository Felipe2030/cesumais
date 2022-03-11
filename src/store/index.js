import { createStore } from 'vuex'

export default createStore({
  state: {
    title: "",

    statusNav: true,
    
    statusAlert: false,

    listAlert: [
      {id: 1, title:"Mensagem do administrador", mensagem:"Seu plano de ação teve uma modificação."},
    ],

    listNavCesumais: [
      {title:"Conheça o Programa Cesu+",link:"/cesumais", image:require('@/assets/imagem-home-logo-cesumais.png')},
      {title:"Portal de Gestão Meu",link:"/meu",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Radar da Qualidade",link:"/radar",image:require('@/assets/imagem-home-logo-radar.png')},
      {title:"Painel do GRC",link:"/grc",image:require('@/assets/imagem-home-logo-grc.png')},
      {title:"Gerenciamento do Comex",link:"/comex",image:require('@/assets/imagem-home-logo-comex.png')}
    ],

    listNavCesumaisConfiguracao: [
      {title:"Centro de Custo",link:"/configuracao/centro_de_custo",image:require('@/assets/imagem-configuracoes-logo.png')},
      {title:"Estrutura Organizacional",link:"/configuracao/estrutura_organizacional",image:require('@/assets/imagem-configuracoes-logo.png')},
      {title:"Usuários",link:"/configuracao/usuario",image:require('@/assets/imagem-configuracoes-logo.png')},
      {title:"Permissões",link:"/configuracao/permissoes",image:require('@/assets/imagem-configuracoes-logo.png')},
    ],

    listNavMeu: [
      {title:"Plano de Ação",link:"/meu/plano_de_acao",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Compromissos",link:"/meu/compromissos",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Reuniões",link:"/meu/reuniao",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Configuração",link:"/meu/configuracao",image:require('@/assets/imagem-home-logo-meu.png')}
    ],

    listNavMeuConfiguracao: [
      {title:"Indicadores",link:"/meu/configuracao/indicadores",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Indicadores Estruturas",link:"/meu/configuracao/indicadores_estruturas",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Assuntos",link:"/meu/configuracao/assuntos",image:require('@/assets/imagem-home-logo-meu.png')},
      {title:"Compromissos",link:"/meu/configuracao/compromissos",image:require('@/assets/imagem-home-logo-meu.png')},
    ]
  },
  getters: {
    headerTiltle: (state) => state.title,
    navStatus:    (state) => state.statusNav,
    alertStatus:  (state) => state.statusAlert,
    countAlert:   (state) => state.listAlert.length,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
