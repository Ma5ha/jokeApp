import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingPage } from './pages/programming/Programing.page';
import { NavbarComponent } from './components/navbar/navbar.component';

//modules 
import { HttpClientModule } from '@angular/common/http';


// components 
const components=[ProgrammingPage, NavbarComponent];





@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
