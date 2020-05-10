import { Component, OnInit } from '@angular/core';
import {Player} from "../lobby/player";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public player: Player;

  constructor(
    private af: AngularFireDatabase,
    private router : Router
  ) { }

  ngOnInit() {
    this.player = new Player("");
  }

  createPrivateRoom() {
    this.af.database.app.firestore().collection('lobby').add({'name':this.player.name});
    this.router.navigate(['lobby']);
  }

}
