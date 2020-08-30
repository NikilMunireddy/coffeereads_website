import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstapostsComponent } from './components/instaposts/instaposts.component';
import { UnderconstructionComponent } from './pages/underconstruction/underconstruction.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PhotosComponent } from './pages/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    FooterComponent,
    InstapostsComponent,
    UnderconstructionComponent,
    Page404Component,
    ContactComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
