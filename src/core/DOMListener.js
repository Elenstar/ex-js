import {capitalize} from '@core/utils'

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }
    // добавлять слушателей события
    initDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(
                    `Method ${method} is not implemented in ${this.name || ''}`
                )
            }
            // переопределение метода - всегда с контекстом
            this[method] = this[method].bind(this)
            // addEventListener
            this.$root.on(listener, this[method])
            // bind() создает новую функцию
        })
    }
    // удалять слушателей события
    removeDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
