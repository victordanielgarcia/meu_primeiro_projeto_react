import React from "react";

import "../Styles/Login-Form-Clean.css"

export default function Login() {
  
    return (
      <div>
         <div class="login-clean">
            <form method="post">
                <img style={{width: '100px', height: '100px'}}src="https://raw.githubusercontent.com/pedroamerico2/ReactApp/main/src/Assets/g18-1.png"></img>
                <h2 class="sr-only">Login Form</h2>
                <div class="illustration">
                  <i class="icon ion-ios-navigate"></i>
                </div>
                <div class="form-group">
                  <input class="form-control" type="email" name="email" placeholder="Usuario"></input>
                </div>
                <div class="form-group">
                  <input class="form-control" type="password" name="password" placeholder="Senha"></input>
                  </div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Entrar</button></div><a class="forgot" href="#">Forgot your email or password?</a></form>
        </div>
         </div>
     
    )
}