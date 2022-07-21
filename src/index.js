import {Router} from '@core/routes/Router'
import {DashboardPage} from '@/pages/DashboardPage'
import {ExPage} from '@/pages/ExPage'
import './scss/index.scss'

new Router('#app', {
    dashboard: DashboardPage,
    ex: ExPage
})
