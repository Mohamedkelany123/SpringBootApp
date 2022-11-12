import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TripsComponent } from './components/trips/trips.component';
import { StationsComponent } from './components/stations/stations.component';
import { CrudCardComponent } from './components/shared/crud-card/crud-card.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { UpdateTripComponent } from './components/update-trip/update-trip.component';
import { DeleteTripComponent } from './components/delete-trip/delete-trip.component';
import { CreateStationComponent } from './components/create-station/create-station.component';
import { UpdateStationComponent } from './components/update-station/update-station.component';
import { DeleteStationComponent } from './components/delete-station/delete-station.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-stations', component: StationsComponent },
  { path: 'app-trips', component: TripsComponent },
  { path: 'app-crud-card', component: CrudCardComponent },
  { path: 'app-create-trip', component: CreateTripComponent },
  { path: 'app-update-trip', component: UpdateTripComponent },
  { path: 'app-delete-trip', component: DeleteTripComponent },
  { path: 'app-create-station', component: CreateStationComponent },
  { path: 'app-update-station', component: UpdateStationComponent },
  { path: 'app-delete-station', component: DeleteStationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }