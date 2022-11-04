import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NavigationBarComponent,
    BannerComponent,
    FormComponent,
    OurTeamComponent,
    CustomerServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
