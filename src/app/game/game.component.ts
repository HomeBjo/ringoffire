import { CommonModule } from '@angular/common';
import { Component,inject  } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog,MatDialogContent} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, addDoc, collection, collectionData, doc, docData, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,PlayerComponent,MatSlideToggleModule,MatButtonModule,MatIconModule,MatDialogModule,MatDialogContent,GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined = ''; //  currentCard:string | undefined;   geht auch
  game!: Game;
  firestore: Firestore = inject(Firestore);
  // route : ActivatedRoute = inject(ActivatedRoute)   so könnte man das auch machen evt
 
 
  
  constructor(private route: ActivatedRoute,public dialog: MatDialog) {
   
    this.route.params.subscribe((params: any) => {
      console.log('junus', params.id);
  

      const singleDocRef = this.getsingleDocRef(params.id);
    
      docData(singleDocRef).subscribe((game:any) => console.log('docdata game update', document) )

      this.game.currentPlayer = this.game.currentPlayer
      this.game.playedCards = this.game.playedCards
      this.game.players = this.game.players
      this.game.stack = this.game.stack
      // onSnapshot(singleDocRef, (document) => {
      // console.log('snapshot game update', document.data());

      // });   //hier die andere methode   und oben die geht genausoo laufen auch beide gleichzeitig
    });
  
    this.newGame();
  }

  ngonDestroy(){              // nicht im constructor unsubrciben sons kommt kein consolen log
    
  }


  getNotesRef(){
    return collection(this.firestore,'games')
  }

 // das sind referenzen die man brauch beim snapshot oder collektiondata
  getsingleDocRef(docId:string ){
    return doc(collection(this.firestore,'games'),docId)

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

  newGame() {
    // console.log(this.game);
    this.game = new Game();
    // collection(this.firestore,'games');this.addNote(this.game.toJson())
  }

  // gameData(){   auslager versuch !!!!!!!!!!!!!!!!!
  //   return   
  // }

//   urlLog(this: any){
//     this.route.params.subscribe((params: any)=>{
//         console.log(params)
//     })
//  }   //IM CONstuctor DRIN KA WARUM DRAUSEN NET GEHT !!!!!!!




  // new game haben wir doch noch angepasst als try



  // setNoteObject(obj:any, id:string):Game{
  //   return {
  //     id:id,
  //     type: object.type || "note",
  //     title: object.title || "",
  //     content: object.content || "",
  //     marked: object.marked || false,
  //   }
  // }
  //  bauen wir wohl in der game.ts ein 1!!!!









 // <!--                                    bestehender code                              -->
  takeCard() {
    if (!this.pickCardAnimation) {
        this.currentCard = this.game.stack.pop(); // pop nimmt immer das letzt aus dem array
        this.pickCardAnimation = true;
        console.log('new card', this.currentCard);
        console.log('game is', this.game);

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // modulo appertor ein rest operartor 
        setTimeout(() => {
          if (this.currentCard !== undefined) {
            this.game.playedCards.push(this.currentCard);
            this.pickCardAnimation = false;
          }
        }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent); 
    
    

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {  // (name &&)exestiert name Überhaupt ist dafür da damit der wens leer ist nicht keine fehler kommt
        this.game.players.push(name);
        console.log('The dialog was closed');
      }
     
     
    });
  }

}

// pickCardAnimation = false;
// game!: Game;
// // game: Game | undefined;

// constructor() {}

// ngOnInit(): void {
//  this.newGame();
// }

// newGame(){
//  this.game = new Game();
//  console.log(this.game);

// }

// takeCard(){
//  this.pickCardAnimation = true;
// }
// }
// ------------------< das hier ist eine art lösung und noch eine art entweder ! oder halt | undefined ->
//-> oder wie wir das jetzt machen im constructor defenieren !!!
