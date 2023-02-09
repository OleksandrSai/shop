import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  constructor(private render: Renderer2) {}

  @Input('star') rating: number | undefined;

  @ViewChild('active') active: ElementRef | undefined;

  flag: boolean = false;

  RatingProcent: number | undefined;

  ngOnInit() {
    this.RatingProcent = (100 * (this.rating as number)) / 5;
  }

  ngAfterViewInit() {
    this.Stars();
  }

  Stars() {
    (this.active as ElementRef).nativeElement.style.width = `${this.RatingProcent}%`;
  }

  Place(value: any) {
    if(!this.flag){
    this.RatingProcent = (100 * value) / 5;
    this.Stars();
  }
  }

  RePlace() {
    if(!this.flag){
      this.RatingProcent = (100 * (this.rating as number)) / 5;
    }
    this.Stars();
  }

  newGrade(value: any) {
    if(!this.flag){
      this.RatingProcent = (100 * value) / 5;
      this.Stars();
      this.flag = true;
      this.rating = value;
    }
  }
}

