import ConfiguracaoHomeView from '@/views/configuracao/ConfiguracaoHomeView.vue'
import ConfiguracaoNavView from '@/views/configuracao/ConfiguracaoNavView.vue'
import CentroDeCustoView from '@/views/configuracao/centro-de-custo/CentroDeCustoView.vue'

const ConfiguracaoRouters =  [
    {
        path: '/configuracao',
        name: 'configuracao',
        component: ConfiguracaoHomeView,
        children: [ 
            {
                path: '',
                name: 'configuracao_home',
                component: ConfiguracaoNavView
            },
            {
                path: 'centro_de_custo',
                name: 'configuracao_centro_de_custo',
                component: CentroDeCustoView
            }
        ]
    },
]

export default ConfiguracaoRouters