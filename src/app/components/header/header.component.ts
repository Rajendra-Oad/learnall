import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public cartCount:any;
  public user:any;
  constructor(public cartService:CartService,public router:Router) {}
  
  ngOnInit(): void {
    if(!localStorage.getItem('email')) {
      this.router.navigate(['/login']);
    }
    this.cartCount= this.cartService.getCartItems();
    this.user=localStorage.getItem('email');
    }

    logout(){
      this.router.navigate(['/login']);
      localStorage.clear();
    }

    // randomColor(): string {
    //   return '#' + Math.floor(Math.random()*16777215).toString(16);
    // }


    openDropdown:boolean = false;
    toggleDropdown():void {
      this.openDropdown =!this.openDropdown;
    }

    stopOpen(e:Event):void {
      e.stopPropagation();
    }
    clearAllItems():void {
      this.cartService.clearAllItems();
      this.cartCount = 0;
    }

    
  }


