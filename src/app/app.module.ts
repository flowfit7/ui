import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import {
//   NbChatModule,
//   NbDatepickerModule,
//   NbDialogModule,
//   NbMenuModule,
//   NbSidebarModule,
//   NbToastrModule,
//   NbWindowModule,
// } from '@nebular/theme';
import { RegsiterComponent } from './auth/regsiter/regsiter.component';
import { LoginComponent } from './auth/login/login.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RegsiterComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // NbSidebarModule.forRoot(),
    // NbMenuModule.forRoot(),
    // NbDatepickerModule.forRoot(),
    // NbDialogModule.forRoot(),
    // NbWindowModule.forRoot(),
    // NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
