import { Component, OnInit } from '@angular/core';
import { Cord } from 'src/Cord';
// import { SamDragAndDropGridComponent } from 'drag-and-drop-grid-module';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // public list = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,17 ];
  public list = Array(64).fill(0)
  knightCord: Cord = {
    col: 2,
    row: 3
  }
  constructor() {
    for (let i=0;i<64;i++){
      this.list[i]=i
    }
   }

  ngOnInit() {
  }

  isBlack(col) {
    let row = Math.floor(col / 8)
    // console.log(col)
    // console.log(row)
    // console.log((col + row) % 2 == 0)
    return ((col + row) % 2 == 0)
  }

  getCord(index): Cord {

    let row = Math.floor(index / 8)
    let col = index - (row * 8)
    let requiredCord: Cord = { col: col, row: row }
    // console.log(requiredCord)
    // console.log(this.knightCord.col == requiredCord.col && this.knightCord.row == requiredCord.row)
    return requiredCord
  }
  drop(event: any) {
    console.log(event)
    // moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

}
