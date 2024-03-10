import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  loginForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router,) {
    this.loginForm = new FormGroup({
      email: new FormControl('email'),
      password: new FormControl('password')
    });
  }

  // login() {
  //   this.api.login(data).subscribe(res => {
  //       console.log(res);
  //     });
  // }

}