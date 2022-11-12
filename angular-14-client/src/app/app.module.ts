import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/signin/signin.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    TripsComponent,
    StationsComponent,
    CrudCardComponent,
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
    RouterModule.forRoot([
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
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
      { path: '', redirectTo: '/signup', pathMatch: 'full' }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
