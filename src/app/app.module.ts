import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { ProfileNavItemComponent } from './layout/profile-nav-item/profile-nav-item.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MobileNavComponent } from './layout/mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HeaderNavComponent,
    ProfileNavItemComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
