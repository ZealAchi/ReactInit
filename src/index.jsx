import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './Styles/ImportCss.scss';
import './../node_modules/mdbreact/dist/css/style.css';
function App() {
  return (<Routes />);
}
ReactDOM.render(<App />, document.getElementById('root'));
