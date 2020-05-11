import { Component, OnInit } from '@angular/core';
import {Player} from "../lobby/player";
import {ActivatedRoute, Router} from "@angular/router";
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
  private lobbyId: string;
  public joinFromLink: boolean

  constructor(
    private af: AngularFireDatabase,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lobbyId = this.route.snapshot.paramMap.get('lobbyId');
    this.joinFromLink = this.lobbyId ? true : false;
    this.player = new Player("");
  }

  createPrivateRoom() {
    let newRef = this.af.list<any>('lobby').push({'player':'tmp'}).key;
    this.af.list<any>(`lobby/${newRef}/player`).push({'name':this.player.name});
    this.router.navigate([`lobby/${newRef}`]);
  }

  joinPrivateRoom() {
    this.af.list<any>(`lobby/${this.lobbyId}/player`).push({'name':this.player.name});
    this.router.navigate([`lobby/${this.lobbyId}`]);
  }

}
