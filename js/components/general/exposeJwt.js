class exposeJwtController {
    constructor(WindowEventListener) {
        let self = this;
        self.WindowEventListener = WindowEventListener;
    }
}

exposeJwtController.$inject = ['WindowEventListener'];


export let exposeJwtConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: exposeJwtController,
    template: ''
}