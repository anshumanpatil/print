import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  err: boolean = false;
  hideSelect: boolean = false;
  myControl = new FormControl();
  states;
  filteredOptions: Observable<string[]>;
  selectedOption: any = {};
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {

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

      this.route
      .queryParams
      .subscribe(params => {
        if(params.hasOwnProperty('product')){
          this.hideSelect = true;
          this.selectedOption = this.states.filter(p => p._id == params.product)[0];
        }
        // else {
        //   this.hideSelect = !this.hideSelect;
        // }
      });

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const filteredValue = this._filter(value);
          return filteredValue;
        })
      )
    });
  }

  private _filter(value: any): string[] {
    let filterValue = '';
    if (typeof value == 'string') { filterValue = value.toLowerCase(); }
    else { filterValue = value.name.toLowerCase(); }
    const retVar = this.states.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    return retVar;
  }

  editProduct() {
    console.log(this.selectedOption);

    return this.productService.editProduct(this.selectedOption)
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
