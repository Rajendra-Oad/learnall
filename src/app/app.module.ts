import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './service/cart.service';
import { ApiService } from './service/api.service';
import { UserComponent } from './components/dashboard/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DnavbarComponent } from './components/dashboard/dnavbar/dnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    BlogComponent,
    SignupComponent,
    LoginComponent,
    CoursesComponent,
    CartComponent,
    UserComponent,
    DashboardComponent,
    DnavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CartService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
