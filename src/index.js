import React from 'react';
import ReactDOM from 'react-dom';
import Luces from './components/semaforo.jsx';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Custom CSS
import './index.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


ReactDOM.render(<Luces/>, document.querySelector("#root"));