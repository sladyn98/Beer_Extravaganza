import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { LoginComponent } from './login/login.component';
import { BeerComponent } from './beer/beer.component';
import { AuthGuard } from './auth.guard';
import { DataUploadScreenComponent } from './data-upload-screen/data-upload-screen.component'


const routes: Routes = [
  { path: '' , component: LoginComponent, pathMatch: 'full'},
  { path: 'beer-create', component: BeerCreateComponent , pathMatch:  'full', canActivate: [AuthGuard]},
  { path: 'beer-list', component: BeerListComponent , pathMatch:  'full', canActivate: [AuthGuard]},
  { path: 'beer/:id', component: BeerComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'loadscreen', component: DataUploadScreenComponent, pathMatch: 'full', canActivate: [AuthGuard]},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
