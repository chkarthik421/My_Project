import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicListComponent } from './My_Practice/topic-list/topic-list.component';
import { DataBindingComponent } from './My_Practice/data-binding/data-binding.component';
import { NgForComponent } from './My_Practice/ng-for/ng-for.component';
import { NgSwitchComponent } from './My_Practice/ng-switch/ng-switch.component';
import { CURDOparationComponent } from './My_Practice/curd-oparation/curd-oparation.component';
import { PagenotfoundComponent } from './My_Practice/pagenotfound/pagenotfound.component';
import { HomeComponent } from './My_Practice/home/home.component';
import { LoginComponent } from './My_Website/login/login.component';
import { SignupComponent } from './My_Website/signup/signup.component';

const routes: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'list', component:TopicListComponent},
  { path:'databinding', component: DataBindingComponent},
  { path:'ngfor', component: NgForComponent},
  { path:'ngswitch', component: NgSwitchComponent},
  { path:'curdoparation', component: CURDOparationComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:"**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
                            TopicListComponent,
                            DataBindingComponent,
                            NgForComponent,
                            NgSwitchComponent,
                            CURDOparationComponent,
                            PagenotfoundComponent
                          ]


