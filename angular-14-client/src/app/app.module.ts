import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/sign-components/signin/signin.component';
import { SignupComponent } from './components/sign-components/signup/signup.component';
import { CreateStationComponent } from './components/station-components/create-station/create-station.component';
import { DeleteStationComponent } from './components/station-components/delete-station/delete-station.component';
import { StationsComponent } from './components/station-components/stations/stations.component';
import { UpdateStationComponent } from './components/station-components/update-station/update-station.component';
import { CreateTripComponent } from './components/trip-components/create-trip/create-trip.component';
import { DeleteTripComponent } from './components/trip-components/delete-trip/delete-trip.component';
import { TripsComponent } from './components/trip-components/trips/trips.component';
import { UpdateTripComponent } from './components/trip-components/update-trip/update-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    TripsComponent,
    StationsComponent,
    CreateTripComponent,
    UpdateTripComponent,
    DeleteTripComponent,
    CreateStationComponent,
    UpdateStationComponent,
    DeleteStationComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'app-home', component: HomeComponent },
      { path: 'app-stations', component: StationsComponent },
      { path: 'app-trips', component: TripsComponent },
      { path: 'app-create-trip', component: CreateTripComponent },
      { path: 'app-update-trip', component: UpdateTripComponent },
      { path: 'app-delete-trip', component: DeleteTripComponent },
      { path: 'app-create-station', component: CreateStationComponent },
      { path: 'app-update-station', component: UpdateStationComponent },
      { path: 'app-delete-station', component: DeleteStationComponent },
      { path: '', redirectTo: '/signup', pathMatch: 'full' }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
