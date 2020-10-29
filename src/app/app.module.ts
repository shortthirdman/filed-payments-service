import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRouteComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreModule } from './core/core.module';
import { fakeBackendProvider } from './core/services/fake-backend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    appRouteComponents
  ],
  exports: [ appRouteComponents ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	  FormsModule,
	  ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppCoreModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
