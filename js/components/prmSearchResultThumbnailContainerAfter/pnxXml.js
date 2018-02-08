import pnxXmlHTML from './pnxXml.html'
class PnxXmlController {
  constructor() {
    try {
      this.recordid = this.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    } catch (e) {
      this.recordid = null;
    }
  }

  $onInit() {
    let self = this;
    if (hotkeys) {
      hotkeys("ctrl+enter", (e) => {
        self.visible = !self.visible;

        for (let element of Array.from(document.querySelectorAll('.pnx-xml'))) {
          element.style.display = self.visible ? 'flex' : 'none';
        }
      });
    }
  }
}

export let pnxXmlConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PnxXmlController,
  template: pnxXmlHTML
}
