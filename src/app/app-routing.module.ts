import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';




const routes: Routes = [
  {
    path:'',component:LayoutAdminComponent, children:[
      {path:'',redirectTo:'product',pathMatch:'full'},
      {path:'product',component:ListProductComponent},
      {path:'product/add',component:ProductAddComponent},
      {path:'product/edit/:id',component:ProductEditComponent}
    ]
  }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

