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
    this.af.list<any>('lobby/1/player').push({'name':this.player.name}).then(() => {
      this.router.navigate(['lobby']);
    });
  }

}
