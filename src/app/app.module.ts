import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './My_Website/top-header/top-header.component';
import { HeaderComponent } from './My_Website/header/header.component';
import { CURDOparationComponent } from './My_Practice/curd-oparation/curd-oparation.component';
import { MrMissPipe } from './Pipes/mr.miss.pipe';
import { OrdinalPipe } from './Pipes/ordinal.pipe';
import { DataShowComponent } from './My_Practice/data-show/data-show.component';
import { ParentComponent } from './My_Practice/parent/parent.component';
import { ChildTwoComponent } from './My_Practice/child-two/child-two.component';
import { ChildOneComponent } from './My_Practice/child-one/child-one.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './My_Practice/categories/categories.component';
import { CategoryComponent } from './My_Practice/category/category.component';
import { TopicListComponent } from './My_Practice/topic-list/topic-list.component';
import {  myRoutings } from './app-routing.module';
import { CommentsComponent } from './My_Practice/comments/comments.component';
import { FormsComponent } from './My_Practice/forms/forms.component';
import { TemplateDrivenFormComponent } from './My_Practice/template-driven-form/template-driven-form.component';
import { HomeComponent } from './My_Practice/home/home.component';
import { LoginComponent } from './My_Website/login/login.component';
import { SignupComponent } from './My_Website/signup/signup.component';
import { RegisterformComponent } from './My_Website/registerform/registerform.component';
import { FormValidationComponent } from './My_Practice/form-validation/form-validation.component';
import { ReactiveFormComponent } from './My_Practice/reactive-form/reactive-form.component';
import { ToUpperCaseComponent } from './My_Practice/to-upper-case/to-upper-case.component';
import { LifeCycleHooksComponent } from './My_Practice/life-cycle-hooks/life-cycle-hooks.component';
import { ObservablesComponent } from './My_Practice/observables/observables.component';





@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    CURDOparationComponent,
    MrMissPipe,
    OrdinalPipe,
    DataShowComponent,
    ParentComponent,
    ChildTwoComponent,
    ChildOneComponent,
    CategoriesComponent,
    CategoryComponent,
    TopicListComponent,
    myRoutings,
    CommentsComponent,
    FormsComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RegisterformComponent,
    FormValidationComponent,
    ReactiveFormComponent,
    ToUpperCaseComponent,
    LifeCycleHooksComponent,
    ObservablesComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
