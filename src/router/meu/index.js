import MeuHomeView from '@/views/meu/MeuHomeView.vue'
import MeuNavView from '@/views/meu/MeuNavView.vue'
import MeuConfiguracaoView from '@/views/meu/configuracao/MeuConfiguracaoView.vue'

const MeuRouters =  [
    {
        path: '/meu',
        name: 'meu',
        component: MeuHomeView,
        children: [
            {
                path: '',
                name: 'meu_home',
                component: MeuNavView
            },
            {
                path: 'configuracao',
                name: 'meu_configuracao',
                component: MeuConfiguracaoView
            }
        ] 
    },
]

export default MeuRouters