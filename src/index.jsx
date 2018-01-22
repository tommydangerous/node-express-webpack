import { render } from 'react-dom';
import _ from 'lodash';
import React from 'react';

import SampleApp from './components/SampleApp';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'more'], ' ');

  return element;
}

document.body.appendChild(component());

render(
  <SampleApp />,
  document.getElementById('page-app'),
);
