import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Player} from "./player";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  public players: Player[];

  constructor(
    private af: AngularFireDatabase,
    private route: ActivatedRoute
  ) {  }


  ngOnInit() {
    let lobbyId = this.route.snapshot.paramMap.get('lobbyId');
    this.af.list<any>(`lobby/${lobbyId}/player`).valueChanges().subscribe((dbLobbies) => {
      this.players = dbLobbies;
    });
  }

}
