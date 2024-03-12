import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public hidePassword:boolean = true;

  public login = {
    email:"",
    password:""
  }

  public msg:any;
  public clr={red:false,green:false}
  public loginSuccess:boolean=false;
  constructor(public api:ApiService,public router:Router){

  }

  loginForm(){
    console.log(this.login);
    const data = new FormData();
    data.append("userEmail",this.login.email);
    data.append("userPassword",this.login.password);

    this.api.login(data).subscribe((response:any)=>{
      
    console.log(response);

    this.msg=response.message
    if(response.status==1){

      this.loginSuccess = true;
      setTimeout(() => {
          this.loginSuccess = false;
      }, 2000);
      this.clr={red:false,green:true}
      setTimeout(() => {
        this.router.navigate(['/home']);
        localStorage.setItem("email",this.login.email);
      }, 3000);
    }else{
      this.clr={red:true,green:false}
    }
    })
  }

  redirectToGoogleLogin() {
    window.open("https://accounts.google.com/AccountChooser","blank");
  }

  redirectToAppleLogin() {
    window.open("https://appleid.apple.com/sign-in", '_blank');
  }

  redirectToFacebookLogin() {
    window.open("https://www.facebook.com/login/", '_blank');
  }

  togglePass(){
    this.hidePassword = !this.hidePassword;
  }

}
