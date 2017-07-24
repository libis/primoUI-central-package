/* component to do all your experimental stuff */
/* [en|dis]able in components*/

class ExperimentController {
  constructor() {
    console.log('Experiment:');
  }
}

//ExperimentController.$inject = ['searchResults'];

export let experimentConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ExperimentController,
  template: ''
}
