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
   game: Game;
  

  constructor() {
    this.game = new Game();
    this.newGame()
  }

 

  newGame(){
    console.log(this.game);
  }

  takeCard(){
    this.pickCardAnimation = true;
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
