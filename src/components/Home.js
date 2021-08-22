

export const Home = () => {
    const acount = document.createElement('div'); 
    const acountHeader = document.createElement('div');
    const acountLogo = document.createElement('img');
    const srcAcountLogo = document.createAttribute('src');
    const altAcountLogo = document.createAttribute('alt');
    const logContent = document.createElement('div'); 
    const loginUser = document.createElement('div'); 
    const formHome = document.createElement('form')
    let firstLabel = document.createElement('label');
    let firstInput = document.createElement('input');
    let secondLabel = document.createElement('label');
    let secondInput = document.createElement('input');
    const firstFor = document.createAttribute('for');
    const firstType = document.createAttribute('type');


    srcAcountLogo.value = "https://static-cse.canva.com/blob/218946/Salmon-and-Yellow-Banana-Fruit-Pattern-Zoom-Virtual-Background.png"
    //srcAcountLogo.value = "logo-nav.png"
    altAcountLogo.value = "LoveBook logo";
    
    firstLabel = "Email";
    

    acount.className = "acount";
    acount.appendChild(acountHeader).className = "acount-header";
    acountHeader.appendChild(acountLogo).className = "acount-logo";
    acountLogo.setAttributeNode(srcAcountLogo);
    acountLogo.setAttributeNode(altAcountLogo);
    logContent.appendChild(loginUser);
    loginUser.appendChild(formHome);
    formHome.appendChild(firstLabel);
    formHome.appendChild(firstInput);
    formHome.appendChild(secondInput);
    formHome.appendChild(secondLabel);


    //console.log()
    return acount
} 
/*
{
    template:
      `<div class="acount" >
          <div class="acount-header">
              <img src="../img/logo-nav.png" class="acount-logo"alt="LoveBook logo">
          </div>
          <div class="log-content">
              <div class="login-user">
                  <form action="" id="login-form" class="form">
                      <label for="login-email">Email</label>
                      <input type="email" id="login-email" required>
                      <label for="login-password">Eassword</label>                           
                      <input type="password" id="login-password" required>
                      <button type="submit" class="btn login-btn">Login</button>
                  </form>
              </div>
              <div class="login-google">
                  <p>Login with google</p>
              </div>
              <div>
                  <button id="signup">create an account</button>
              </div>
          </div>
      </div>

      <script >
      const buttonLogin = document.document.querySelector('.login-btn');
      buttonLogin.addEventListener('click',(e) => e.preventDefault(), onNavigate('/register'));
      </script>

       `
  }*/

/*export const Home = () => {
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
  
    buttonRegister.textContent = 'Registrate';
    buttonLogin.textContent = 'Inicia sesión';
  
    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));
  
    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);
  
    return HomeDiv;
  };*/