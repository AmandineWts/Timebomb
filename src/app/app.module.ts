import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LobbyComponent } from './lobby/lobby.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lobby/:lobbyId',
    component: LobbyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'timebomb'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
