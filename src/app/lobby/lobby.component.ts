import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Player} from "./player";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  public players: Player[];

  constructor(
    private af: AngularFireDatabase
  ) {  }


  ngOnInit() {
    this.af.list<any>('lobby').valueChanges().subscribe((dbLobbies) => {
      this.players = dbLobbies[0].player;
      console.log("values changed!");
    });
  }

}