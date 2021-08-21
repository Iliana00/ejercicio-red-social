export const signin = {
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
         `
    }