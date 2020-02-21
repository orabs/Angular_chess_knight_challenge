import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardArray = Array(8).fill(0).map(() => Array(8).fill(0));



  constructor() {

   }

  ngOnInit() {
  }

  isBlack(col,row) {
    return  (col % 2 == 0 && row % 2 != 0 || row % 2 == 0 && col % 2 != 0 )
  }

}
