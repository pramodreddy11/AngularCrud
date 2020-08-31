import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudappComponent } from './crudapp/crudapp.component';
import { componentFactoryName } from '@angular/compiler';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { SampledataComponent } from './sampledata/sampledata.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/crudsmaple', pathMatch: 'full' 
  },
  {
    path:'crudsmaple',component:CrudappComponent,
   
  },
  {
    
      path:'edit' , component:EditdetailsComponent
    
  },
  {
    path:'sampleData',component:SampledataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
