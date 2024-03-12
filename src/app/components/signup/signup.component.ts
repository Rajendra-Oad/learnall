import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public signup = {
    fname:"",
    lname:"",
    phone:"",
    email:"",
    password:""
  }
  public msg:any;
  public clr={red:false,green:false}
  public signupSuccess:boolean=false;
  constructor(public api:ApiService){

  }

  register(){
    console.log(this.signup);
    const data = new FormData();
    data.append("fname",this.signup.fname);
    data.append("lname",this.signup.lname);
    data.append("email",this.signup.email);
    data.append("ph",this.signup.phone);
    data.append("pwd",this.signup.password);

    this.api.register(data).subscribe((response:any)=>{
      
    console.log(response);

    this.msg=response.message
    if(response.status==1){

      this.signupSuccess = true;
      setTimeout(() => {
          this.signupSuccess = false;
      }, 2000);
      this.clr={red:false,green:true}
    }else{
      this.clr={red:true,green:false}
    }
    })
  }

  redirectToGoogleSignup(){
    window.open("https://accounts.google.com/signup","_blank");
  }

  redirectToFacebookSignup(){
    window.open("https://www.facebook.com/r.php","_blank");
  }

  redirectToAppleSignup(){
    window.open("https://appleid.apple.com/account","_blank");
  }

}
