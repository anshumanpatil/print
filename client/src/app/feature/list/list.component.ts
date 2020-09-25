import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listOfProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router) {

  }
  editProduct(product: any) {
    const r = confirm("Want to edit product - " + product.name + " ?");
    if (!r) {
      return false
    }
    this.router.navigate(['home/update'], { queryParams: { product: product._id } });
  }
  deleteProduct(product: any) {
    const r = confirm("Want to delete product - " + product.name + " ?");
    if (!r) {
      return false
    }

    return this.productService.deleteProduct({id: product._id})
    .subscribe(
      res => {
        alert(res.message);
        this.refreshList();
      },
      error => {
        console.log(error);
        alert(error.message);
      }
    )
    

  }
  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.productService.getProductList().subscribe(res => {
      this.listOfProducts = res;
    });
  }
}
