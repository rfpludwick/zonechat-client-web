'use strict';

const e = React.createElement;

class SubmitButton extends React.Component {
  render() {
    return e(
      'input',
	    {},
      'Sendy'
    );
  }
}

const domContainer = document.querySelector('#submit_button');

ReactDOM.render(e(SubmitButton), domContainer);
