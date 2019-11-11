import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit, OnChanges {
    // simpleChanges is a list of all the changes taking place
    // This method is called everytime a there is a change
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertName in changes) {
            let change = changes[propertName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertName + ': currentValue = ' + current + ', previous = ' + previous);
        }
    }
    // This receives values from other component i.e. app.componet
    // This is a nested component receiving values from the parent component
    @Input() simpleInput: string;



  constructor() { }

  ngOnInit() {
  }

}
