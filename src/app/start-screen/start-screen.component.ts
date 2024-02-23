import { Component } from '@angular/core';
import { Firestore, addDoc, collection} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { log } from 'console';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  [x: string]: any;

  constructor(private firestore: Firestore, private router: Router ) { }

  async newGame() {
    let game = new Game();
    
    try {
      const gameInfo: any = await this.addNote(game.toJson());
      console.log('gucken', gameInfo.id);
      this.router.navigateByUrl('/game/' + gameInfo.id);
    } catch (error) {
      console.error('error game:', error);
    }
  }
  
  async addNote(item:{}){
    await addDoc(this.getNotesRef(),item)
  }

  getNotesRef(){
    return collection(this.firestore,'games')
  }
}

