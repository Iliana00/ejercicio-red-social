import { onNavigate } from '../router/routes.js';

export const Home = () => {
  const html = `
  <nav>
  <div class="logo-nav">
  <img class="logo-nav" src="../img/logo-nav2.png" alt="">
  </div>
  <div class="menu-nav">
  <ul>
    <li><a id="logout" href="/">Sign off</a></li>
    <li>
      <a id="profileUser"><img src="../img/iconsusuario.png">Profile</a>
    </li>
  </ul>
  </div>
  <div class="post">
  <button id="post" type="submit">Add post</button> 
  </div>
  </nav>
  `;
  const mainDiv = document.createElement('div');
        mainDiv.setAttribute('class', 'div-home')
      
        mainDiv.innerHTML = html;
        //mainDiv.querySelector('root')
        const profileUser = mainDiv.querySelector('#profileUser');
        //const btnSignUp = mainDiv.querySelector('#signup');
    
        profileUser.addEventListener('click', (e) => {
          e.preventDefault();
              onNavigate('/profile');                
      }); 

        return mainDiv
  
}
