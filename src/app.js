
const events = require('./events.js');
const ui = require('./ui.js');

class App extends events.Events {
  
  constructor() {
    super();

    this.ui = new ui.UI();
    
  }
  
}

exports.App = App;
