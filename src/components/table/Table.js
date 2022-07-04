import {ExComponent} from '@core/ExComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExComponent {
    static className = 'ex__table'

    toHTML() {
        return createTable(10)
    }
}
