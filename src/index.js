import {Ex} from '@/components/ex/Ex'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Header} from '@/components/header/Header'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/store/rootReducer'
import {storage, debounce} from '@core/utils'
import './scss/index.scss'
import {initialState} from '@/store/initialState'

const store = createStore(rootReducer, initialState)

const stateListener = debounce((state) => {
    console.log(state)
    storage('excel-state', state)
}, 300)

store.subscribe(stateListener)

const ex = new Ex('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

ex.render()
