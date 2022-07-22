import {Page} from '@core/page/Page'
import {createStore} from '@core/store/createStore'
import {rootReducer} from '@/store/rootReducer'
import {normalizeInitialState} from '@/store/initialState'
import {Ex} from '@/components/ex/Ex'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {StateProcessor} from '@core/page/StateProcessor'
import {LocalStorageClient} from '@/shared/LocalStorageClient'

export class ExPage extends Page {
    constructor(param) {
        super(param)

        this.storeSub = null
        this.processor = new StateProcessor(
            new LocalStorageClient(this.params)
        )
    }

    async getRoot() {
        const state = await this.processor.get()
        const initialState = normalizeInitialState(state)
        const store = createStore(rootReducer, initialState)

        this.storeSub = store.subscribe(this.processor.listen)

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
        this.storeSub.unsubscribe()
    }
}
