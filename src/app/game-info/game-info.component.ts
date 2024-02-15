import { Component, Input, SimpleChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title: string = '';
  description = '';
  @Input() card: string | undefined;

  ngOnChanges(): void{                 //void heist einfach nur das die was ausführt und nix zurück gibt geht eig auch ohne!
    if (this.card) {
      console.log('currentcard card', this.card);
      let cardNumber = +this.card!.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
   
  }
 






  // // hier ein lösung um eine funktion in einer anderen funktion aufzurufen ka warum das so kompliziert is aber mit this
  // // usw bin ich nicht weiter gekommen ........ ok video weiterguckt scheint normal zu sein xDDD ok das hier ist noch eine
  // // andere lösung mit eine art service
  // ngOnChanges(changes: SimpleChanges): void {
  //   if ('card' in changes) {
  //     this.title = ''; // Hier können Sie die Logik für die Aktualisierung der Komponente hinzufügen
  //     this.description = '';
  //     console.log('currentcard lol', this.card);
  //   }
  // }
}