import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};


const component = routes[window.location.pathname];

rootDiv.appendChild(component());