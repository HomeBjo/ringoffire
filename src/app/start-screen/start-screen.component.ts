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

  newGame(){
    //start Game
    let game = new Game();
    collection(this.firestore,'games');this.addNote(game.toJson())
    .then((gameInfo:any) => {
        console.log('gucken',gameInfo.id)
       this.router.navigateByUrl('/game/'+ gameInfo.id);
    });
    
  }

  async addNote(item:{}){
    await addDoc(this.getNotesRef(),item).catch(
      (err)=>{
        console.error(err)
      }
    ).then (
      (docRef) =>{ console.log('then fehler',docRef); 

      }
    )
  }

  getNotesRef(){
    return collection(this.firestore,'games')
  }
}

