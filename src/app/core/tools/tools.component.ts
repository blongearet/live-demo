import { Component, OnInit } from '@angular/core';
import {StarRatingComponentType} from "../components/star-rating/star-rating.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  public StarRatingComponentType: typeof StarRatingComponentType = StarRatingComponentType
  public formStarRating: FormGroup

  constructor(fb: FormBuilder) {
    this.formStarRating = fb.group({
      rating: fb.control(5),
      color: fb.control('blue')
    })
  }

  ngOnInit() {
  }

}
