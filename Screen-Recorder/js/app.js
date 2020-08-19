import React from 'react';
import ReactDOM from 'react-dom';
import Snipper from './Snipper';
 
const render = (Component) => {
  ReactDOM.render(
      <Component />,
    document.getElementById('root'),
  );
};
 
render(Snipper);