import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cq-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Rate of – ${this.rating}`);
  }
}
