import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { AuthGuard } from './_auth/auth.guard';
import { UserService } from './_services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { GalleryComponent } from './gallery/gallery.component';
import { DragDirective } from './drag.directive';


import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatNativeDateModule} from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ShowProductInformationComponent } from './show-product-information/show-product-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ShowProductImagesComponent } from './show-product-images/show-product-images.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FaqComponent } from './faq/faq.component';
import { AddFaqComponent } from './add-faq/add-faq.component';
import { FaqDetailsComponent } from './faq-details/faq-details.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddNewProductComponent,
    GalleryComponent,
    DragDirective,
    ShowProductInformationComponent,
    ShowProductImagesComponent,
    AboutMeComponent,
    ContactMeComponent,
    FaqComponent,
    AddFaqComponent,
    FaqDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,MatDialogModule
    
  ],
  providers: [
	AuthGuard,{
		provide:HTTP_INTERCEPTORS,
		useClass:AuthInterceptor,
		multi:true
	},
	UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
