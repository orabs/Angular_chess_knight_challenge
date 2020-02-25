import { Component, OnInit, HostListener, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Cord } from 'src/Cord';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  @Input('cdkDragData')
  data
  // connectedTo = ["row0", "row1", "row2", "row3", "row4", "row5", "row6","row7"];
  connectedTo = ["0", "1", "2", "3", "4", "5", "6","7"];
  connectedTo2 = ["row0col0", "row0col1", "row0col2", "row0col3", "row0col4", "row0col5", "row0col6","row0col5"];
  // boardArray: any = Array(64).fill(0)
  boardArray = Array(8).fill(0).map(() => Array(8).fill(0));

  title = 'clientKnightChallenge';

  knightCord: Cord = {
    col: 2,
    row: 4
  }



  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event)
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    console.log(this.data)
this.knightCord.col=parseInt(event.container.id)
 this.knightCord.row=event.currentIndex

  }

  entered(event ){
    console.log("entered")
    console.log(event)
  }


  onDragOver(e,action,i) {
    // console.log(e)
    // console.log(action)
    // console.log(i)
    // console.log("Asg")
  }


  ngOnInit(){


    for (let i = 0; i < this.boardArray.length; i++) {
      for (let j = 0; j < this.boardArray[i].length; j++) {

        console.log(`${i},${j}`)
        this.boardArray[i][j] = `${i},${j}`
      }
    }
  }

  // isBlack(col) {

  //   // console.log(col)
  //   let row = Math.floor(col / 8)
  //   // console.log(col)
  //   // console.log(row)
  //   // console.log((col + row) % 2 == 0)
  //   return ((col + row) % 2 == 0)
  // }

  isBlack(col, row) {
    return (col % 2 == 0 && row % 2 != 0 || row % 2 == 0 && col % 2 != 0)
  }


  getCord(index): Cord {

    let row = Math.floor(index / 8)
    let col = index - (row * 8)
    let requiredCord: Cord = { col: col, row: row }
    return requiredCord
  }
}



