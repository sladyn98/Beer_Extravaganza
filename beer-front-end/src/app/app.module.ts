import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BeerComponent } from './beer/beer.component';
import { DataUploadScreenComponent } from './data-upload-screen/data-upload-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerCreateComponent,
    BeerListComponent,
    LoginComponent,
    BeerComponent,
    DataUploadScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
