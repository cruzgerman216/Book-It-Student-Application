import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectFeature:string = 'bookshelf';

  onSelectFeature(feature:string){
    this.selectFeature=feature;
    console.log(feature);
  }
}
