import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard:string | undefined = '';   //  currentCard:string | undefined;   geht auch
  game: Game;
  

  constructor() {
    this.game = new Game();
    this.newGame()
  }

 

  newGame(){
    console.log(this.game);
  }

  takeCard(){

    if (!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop();   // pop nimmt immer das letzt aus dem array
    
    if (this.currentCard !== undefined) {
      this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);
    
      console.log('new card',this.currentCard);
      console.log('game is',this.game);
  
      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    
    }}
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
