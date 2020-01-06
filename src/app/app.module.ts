import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
