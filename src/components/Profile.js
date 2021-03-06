//import { onNavigate } from '../router/routes.js';

export const Profile = () => {
    const html = `
    <h5>Edit Profile</h5>
    <form action="" id="profileForm" class="form">
        <label for="Email">email</label>
        <input type="email" id="signupEmail" readonly>
        <label for="Username">Username</label>
        <input type="text" id="usernameProfile">
        <label for="profilePhoto">Add Photo</label>
        <input type="url" id="profilePhoto">
        <label for="profilePassword">Change password</label>
        <input type="password" id="profilePassword" required>
        <label for="profilePassword2">confirm your password</label>
        <input type="password" id="signupPassword2" required>
        <p id="signupMesseges"></p>
        <button id="btnProfile" type="submit">Save</button>
    </form>`;
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'account')
  
    mainDiv.innerHTML = html;
    
    /*const btnProfile = mainDiv.querySelector('#btnProfile');
    btnProfile.addEventListener('click', (e) => {
          e.preventDefault();
              onNavigate('/profile');                
        }); */
  
    return mainDiv
  }
  