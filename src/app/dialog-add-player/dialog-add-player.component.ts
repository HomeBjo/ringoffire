import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog,MatDialogContent} from '@angular/material/dialog';





@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatSlideToggleModule,MatButtonModule,MatIconModule,MatDialogModule,MatDialogContent,FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name:string ='';

 constructor(public dialog: MatDialog){ }

 onNoClick(){
  
 }
}
