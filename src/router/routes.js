import { Login } from '../components/login.js';
import { SignUp } from '../components/SignUp.js';
import { Home } from '../components/Home.js';
import { Profile } from '../components/Profile.js';

const divIndex = document.getElementById('root');

export const routes = {
  '/': Login,
  '/signup': SignUp,
  '/home': Home,
  '/profile': Profile,

};

const component = routes[window.location.pathname];
divIndex.appendChild(component());

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (divIndex.firstChild) {
    divIndex.removeChild(divIndex.firstChild);
  }
  divIndex.appendChild(routes[pathname]());

  const view = routes[pathname];
  view(divIndex);
};

window.onpopstate = () => {
  while (divIndex.firstChild) {
    divIndex.removeChild(divIndex.firstChild);
  }
  divIndex.appendChild(component());
};