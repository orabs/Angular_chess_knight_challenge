import {
  Component,
  OnInit,
} from '@angular/core';
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  CdkDropListContainer,
  CdkDropListGroup,
  CdkDragSortEvent
} from '@angular/cdk/drag-drop';
import {
  Cord
} from 'src/Cord';
import {
  ApiService
} from 'src/services/api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public items = Array(64).fill(0)

  knightCord: Cord = {
    col: 2,
    row: 3
  }
  constructor(public api: ApiService) {
    for (let i = 0; i < 64; i++) {
      this.items[i] = i
    }

  }
  ngOnInit() {

  }


  isPossibleMove(index) {
    let targetCord: Cord = this.getCord(index)
    let rowDiff = Math.abs(this.knightCord.row - targetCord.row)
    let colDiff = Math.abs(this.knightCord.col - targetCord.col)
    return rowDiff && colDiff && (colDiff + rowDiff == 3)

  }

  isBlack(col) {
    let row = Math.floor(col / 8)
    return ((col + row) % 2 == 0)
  }

  getCord(index): Cord {

    let row = Math.floor(index / 8)
    let col = index - (row * 8)
    let requiredCord: Cord = {
      col: col,
      row: row
    }
    return requiredCord
  }



  drop(event) {

    event.container.element.nativeElement.style = "background:red !important;"
    let requiredCord = this.getCord(event.container.id)
    let data = {
      requiredCord: requiredCord,
      currentCord: this.knightCord
    }
    this.api.is_possible_move(data).subscribe(answer => {
      this.knightCord.row = requiredCord.row
      this.knightCord.col = requiredCord.col
    }, (err) => {

      alert(err.error)
    })
  }




}