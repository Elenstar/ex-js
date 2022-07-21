export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('Method "getRoute" should be implemented')
    }

    afterRender() {

    }

    destroy() {

    }
}
