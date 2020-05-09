import {Component} from '@angular/core';
import {Message} from "./message";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public messages: any = [];

  constructor(public af: AngularFireDatabase) {
    this.messages = af.list<Message[]>('messages').valueChanges().subscribe((data) => {
      this.messages = data;
      console.log("values changed!");
    });
  }

}
