import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  show: boolean = false;
  collapse: boolean = true;
  @Output() selectedFeature = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFeature(feature:string){
    this.selectedFeature.emit(feature)

  }

}
