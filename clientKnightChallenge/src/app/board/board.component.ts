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
  // boardArray:any = Array(8).fill(0).map(() => Array(8).fill(0));
  boardArray:any = Array(64).fill(0)




  knightCord: Cord = {
    col: 2,
    row: 3
  }

  constructor() {

  }

  ngOnInit() {

    for (let i=0;i<this.boardArray.length;i++) {

      this.boardArray[i]=i

    }
    console.log(this.boardArray)

  }

  isBlack(col) {
    let row = Math.floor(col/8)
    // console.log(col)
    // console.log(row)
    // console.log((col + row) % 2 == 0)
    return ((col+row) % 2==0)
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.boardArray, event.previousIndex, event.currentIndex);
  }


  getCord(index):Cord {

    let row = Math.floor(index / 8)
    let col = index-(row*8)
    let requiredCord:Cord={col:col,row:row}
    return requiredCord
  }

  // @HostListener('document:mouseup', ['$event'])
  // mouseRelease(event){
  //   console.log(event)
  //   console.log(event.target.attributes)
  //   console.log(event.target.attributes.id)

  // }
  


}

