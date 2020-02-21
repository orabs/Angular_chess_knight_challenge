import {
  Component,
  OnInit
} from '@angular/core';
import {
  Cord
} from 'src/Cord';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardArray = Array(8).fill(0).map(() => Array(8).fill(0));

  knightCord: Cord = {
    col: 2,
    row: 3
  }

  constructor() {

  }

  ngOnInit() {

  }

  isBlack(col, row) {
    return (col % 2 == 0 && row % 2 != 0 || row % 2 == 0 && col % 2 != 0)
  }


  dragAndDrop(event:CdkDragDrop<number>) {
    console.log(event)
    moveItemInArray(this.boardArray,event.previousIndex,event.currentIndex);

  }

  @HostListener('document:mouseup', ['$event'])
  mouseRelease(event){
    console.log(event)
    console.log(event.target.attributes)
    console.log(event.target.attributes.id)

  }
  


}

