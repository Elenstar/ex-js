import {Page} from '@core/Page'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/store/rootReducer'
import {normalizeInitialState} from '@/store/initialState'
import {debounce, storage} from '@core/utils'
import {Ex} from '@/components/ex/Ex'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

function storageName(param) {
    return 'ex:' + param
}

export class ExPage extends Page {
    getRoot() {
        const params = this.params ? this.params : Date.now().toString()

        const state = storage(storageName(params))
        const store = createStore(rootReducer, normalizeInitialState(state))

        const stateListener = debounce((state) => {
            storage(storageName(params), state)
        }, 300)

        store.subscribe(stateListener)

        this.ex = new Ex({
            components: [Header, Toolbar, Formula, Table],
            store
        })

        return this.ex.getRoot()
    }

    afterRender() {
        this.ex.init()
    }

    destroy() {
        this.ex.destroy()
    }
}
