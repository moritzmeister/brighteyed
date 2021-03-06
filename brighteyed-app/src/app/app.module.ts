/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'


import { DoctorComponent } from './Doctor/Doctor.component';
import { PatientComponent } from './Patient/Patient.component';

import { AuthorizeAccessComponent } from './AuthorizeAccess/AuthorizeAccess.component';
import { RevokeAccessComponent } from './RevokeAccess/RevokeAccess.component';
import { AddRecordTransactionComponent } from './AddRecordTransaction/AddRecordTransaction.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { UploadService } from './upload.service';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    AuthorizeAccessComponent,
    RevokeAccessComponent,
    AddRecordTransactionComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
