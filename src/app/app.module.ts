import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { LandingModule } from './landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    LandingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

