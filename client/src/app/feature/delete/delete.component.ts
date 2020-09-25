import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductService } from "../../services/product.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  err: boolean = false;
  myControl = new FormControl();
  states;
  filteredOptions: Observable<string[]>;
  selectedOption: any = {};
  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.loadStates();
  }

  selectionMethod(event) {
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
    if (typeof value == 'string') { filterValue = value.toLowerCase(); }
    else { filterValue = value.name.toLowerCase(); }
    const retVar = this.states.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    return retVar;
  }

  deleteProduct() {
    return this.productService.deleteProduct({id: this.selectedOption._id})
      .subscribe(
        res => {
          alert(res.message);
          this.router.navigate(['/home']);
        },
        error => {
          this.err = true;
          console.log(error);
          alert(error.message);
        }
      )
  }

}
