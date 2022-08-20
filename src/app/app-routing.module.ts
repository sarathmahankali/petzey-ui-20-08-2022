import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { loginRequest } from './app-config';
import { AllPetsVetsComponent } from './dashboard/all-pets-vets/all-pets-vets.component';
import { LoginComponent } from './login/login.component';
import { Vet } from './Models/appointmentVet.model';
import { PetparentProfileComponent } from './petparent-profile/petparent-profile.component';
import { RecepProfileComponent } from './recep-profile/recep-profile.component';
import { SignupComponent } from './signup/signup.component';
import { VetProfileComponent } from './vet-profile/vet-profile.component';
import { ViewAppDetailsComponent } from './view-app-details/view-app-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', redirectTo: './landing', pathMatch: 'full' },
  { path: '**', redirectTo: './landing', pathMatch: 'full' },

  {path:'login',component:LoginComponent},
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing-screen/landing-screen.module').then((m) => m.LandingScreenModule),
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
 // { path: 'signup', component: SignupComponent },
  { path: 'details', component: AllPetsVetsComponent },
  { path: 'petparentprofile', component: PetparentProfileComponent },
  { path: 'vetprofile', component: VetProfileComponent },
  
  { path: 'recepprofile', component: RecepProfileComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {path:'viewdetails',component:ViewDetailsComponent},
  {path:'viewappdetails',component:ViewAppDetailsComponent}
];

const config: ExtraOptions = {
  useHash : false
}

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
