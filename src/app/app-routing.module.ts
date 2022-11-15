import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {HomeComponent} from './home/home.component';
import{  AddNewProductComponent} from'./add-new-product/add-new-product.component';
import { AuthGuard } from './_auth/auth.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { ShowProductInformationComponent } from './show-product-information/show-product-information.component';
import { ProductResolverService } from './_services/product-resolver.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FaqComponent } from './faq/faq.component';
import { AddFaqComponent } from './add-faq/add-faq.component';
import { FaqDetailsComponent } from './faq-details/faq-details.component';
import { FaqResolverService } from './_services/faq-resolver.service';
import {DisplayProductComponent} from './display-product/display-product.component'

const routes: Routes = [
	
	{path:'',component:HomeComponent},
	{path:'aboutMe',component:AboutMeComponent},
	{path:'contactMe',component:ContactMeComponent,
	resolve:{
		product:ProductResolverService
	}
	
	},
	{path:'admin',component:AdminComponent, canActivate: [AuthGuard],data:{roles:['Admin']}},
	{path:'user',component:UserComponent, canActivate: [AuthGuard],data:{roles:['User']}},
	{path:'forbidden',component:ForbiddenComponent},
	{path:'login',component:LoginComponent},
	{path:'faq',component:FaqComponent},
	{path:'addFaq',component:AddFaqComponent,
	resolve:{
		faq:FaqResolverService
	}
	},
	{path:'faqDetails',component:FaqDetailsComponent},
	{path:'addNewProduct',component: AddNewProductComponent,canActivate: [AuthGuard],data:{roles:['Admin']},
	resolve:{
		product:ProductResolverService
	}
	},
	{path:'displayProduct', component: DisplayProductComponent,
	
	resolve:{
		product:ProductResolverService
	}
	},
	{path:'gallery',component: GalleryComponent},
	{path:'showProductInformation',component: ShowProductInformationComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//{path:'showProductInformation',component: ShowProductInformationComponent,canActivate: [AuthGuard],data:{roles:['Admin']}}