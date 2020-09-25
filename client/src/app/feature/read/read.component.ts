import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  myControl = new FormControl();
  states;
  filteredOptions: Observable<string[]>;
  selectedOption: any = {};
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.loadStates();
  }

  selectionMethod(event){
    this.selectedOption = this.states.filter(o => o.name.toLowerCase() == event.option.value.toLowerCase())[0];
  }

  loadStates() {
    this.productService.getProductList().subscribe(res => {
      this.states = res.map(p => p);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          return this._filter(value);
        })
      );
    });
  }

  private _filter(value: any): string[] {
    let filterValue = '';
    if(typeof value == 'string')
      {filterValue = value.toLowerCase();}
    else
      {filterValue = value.name.toLowerCase();}
    const retVar = this.states.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    return retVar;
  }

}
