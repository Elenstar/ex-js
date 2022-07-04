import {DOMListener} from '@core/DOMListener'

export class ExComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    // возвращает шаблон компонента
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}
