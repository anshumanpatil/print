import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any = {
    "name": "",
    "cost_per_unit": 0,
    "selling_price_per_unit": 0,
    "units_available": 0
  }
  err: boolean = false;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    return this.productService.addProduct(this.newProduct)
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
