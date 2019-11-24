import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './Styles/ImportCss.scss';

function App() {
  return (<Routes />);
}
ReactDOM.render(<App />, document.getElementById('root'));
