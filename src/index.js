import React from 'react';
import ReactDOM from 'react-dom';
import Luces from './components/semaforo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';


ReactDOM.render(<Luces/>, document.querySelector("#root"));