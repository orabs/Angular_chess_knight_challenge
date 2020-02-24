import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
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

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup < CdkDropList > ;
  @ViewChild(CdkDropList) placeholder: CdkDropList;
  @Output('cdkDropListSorted') sorted: EventEmitter < CdkDragSortEvent >
    public items = Array(64).fill(0)

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropListContainer;
  public sourceIndex: number;
  knightCord: Cord = {
    col: 2,
    row: 3
  }
  constructor() {

    for (let i = 0; i < 64; i++) {
      this.items[i] = i
    }

    this.target = null;
    this.source = null;
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

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;
  
    phElement.style.display = 'none';
    phElement.parentNode.removeChild(phElement);
  }


  drop(event) {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    // console.log(phElement)
    let parent = phElement.parentNode;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
    let newCord = this.getCord(this.targetIndex)

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex && this.isPossibleMove(this.targetIndex)) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);

      this.knightCord.row = newCord.row
      this.knightCord.col = newCord.col
    }

  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {

    if (drop == this.placeholder)
      return true;

    let phElement = this.placeholder.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
    let dropIndex = __indexOf(dropElement.parentNode.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      let sourceElement = this.source.element.nativeElement;
      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentNode.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex) ?
      dropElement.nextSibling : dropElement);

    this.source.start();
    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);

    return false;
  }
}

function __indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
};