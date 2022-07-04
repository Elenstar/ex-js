import './scss/index.scss'
import {Ex} from '@/components/ex/Ex'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Header} from '@/components/header/Header'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
const ex = new Ex('#app', {
    components: [Header, Toolbar, Formula, Table]
})
ex.render()
