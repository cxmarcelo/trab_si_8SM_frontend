import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { FooterComponent } from './app-main/footer/footer.component';
import { MenuComponent } from './app-main/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './app-main/header/header.component';
import { SectorComponent } from './pages/sector/sector.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { AppConfig } from './config/app-config.service';
import { DialogEditSectorComponent } from './pages/sector/dialog-edit-sector/dialog-edit-sector.component';
import { DialogEditProductComponent } from './pages/product/dialog-edit-product/dialog-edit-product.component';
import { DialogEditCategoryComponent } from './pages/category/dialog-edit-category/dialog-edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    HomePageComponent,
    HeaderComponent,
    SectorComponent,
    ProductComponent,
    CategoryComponent,
    DialogEditSectorComponent,
    DialogEditProductComponent,
    DialogEditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DividerModule,
    CardModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    DropdownModule,
    AutoCompleteModule,
    CalendarModule,
    RadioButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    DialogModule,
    
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
