var Blockly = require('blockly-js-editor')

window.onload = function() {

  Blockly.injectWorkspace({
    targetElement: document.getElementById("my_blockly_container")
  })

}