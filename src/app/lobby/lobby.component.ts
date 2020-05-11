import {Component, isDevMode, OnInit} from '@angular/core';
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
  public lobbyId: string;
  public linkToPaste: string;

  constructor(
    private af: AngularFireDatabase,
    private route: ActivatedRoute
  ) {  }


  ngOnInit() {
    this.lobbyId = this.route.snapshot.paramMap.get('lobbyId');
    this.af.list<any>(`lobby/${this.lobbyId}/player`).valueChanges().subscribe((dbLobbies) => {
      this.players = dbLobbies;
    });
    this.initLinkToPaste();
  }

  initLinkToPaste() {
    if (isDevMode()) {
      this.linkToPaste = `https://timebomb-dfc7e.web.app/join/${this.lobbyId}`;
    } else {
      this.linkToPaste = `http://localhost:4200/join/${this.lobbyId}`;
    }
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // notify that content is pasted
  }

}
