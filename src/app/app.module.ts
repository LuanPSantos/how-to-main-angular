import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ListComponent } from './components/phone-list/list/list.component';
import { ItemComponent } from './components/phone-list/item/item.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { HeaderComponent } from './components/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { PhoneService } from './services/phone.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    ItemComponent,
    PhoneFormComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
