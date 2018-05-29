import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum StarRatingComponentType {
  FAVORITE = 'favorite',
  BOOKMARK = 'bookmark',
  STAR = 'star'
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() type: StarRatingComponentType = StarRatingComponentType.STAR
  @Input() color: string = 'black'
  @Input() size: number = 18
  @Input() maxRate: number = 5
  @Input() rating: number = 0
  @Input() detail: boolean = false
  @Output() rate: EventEmitter<number> = new EventEmitter<number>()

  public iconStyles = {}
  public availableRatings = []

  constructor() {}

  public ngOnInit() {
    this.availableRatings = Array.apply(null, {length: this.maxRate}).map(Number.call, Number)
    this.buildIconStyle()
  }

  public onClick(rate: number): void {
    this.rate.emit(rate)
  }

  private buildIconStyle() {
    this.iconStyles = {
      'width.px': this.size,
      'height.px': this.size,
      'font-size.px': this.size,
      color: this.color
    }
  }

  private getType(): string {
    return this.type
  }

  private getTypeBorder(): string {
    return `${this.type}_border`
  }

}
