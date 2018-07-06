import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { APP_PROVIDERS } from './app.providers';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { PagesModule } from './pages/pages.module';

import { MATERIAL_COMPONENTS } from './app.material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    APP_ROUTES,
    PagesModule
  ],
  providers:[
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
