import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog,MatDialogContent} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

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
  game: Game;

  constructor(public dialog: MatDialog) {
    this.game = new Game();
    this.newGame();
  }

  newGame() {
    console.log(this.game);
  }

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
