import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.apiUrl;
  listProducts: any = environment.listProducts;
  updateProducts: any = environment.updateProducts;
  addProducts: any = environment.addProducts;
  deleteProducts: any = environment.deleteProducts;

  constructor(private http: HttpClient) {
    console.log(environment);
  }

  getProductList() {
    return this.http[this.listProducts.method](this.apiUrl + this.listProducts.route)
  }

  addProduct(product: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: product
    };

    return this.http[this.addProducts.method](this.apiUrl + this.addProducts.route, product)
  }

  editProduct(product: any) {
    product.id = product._id;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: product
    };

    return this.http[this.updateProducts.method](this.apiUrl + this.updateProducts.route, product)
  }

  deleteProduct(product: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: product
    };

    return this.http[this.deleteProducts.method](this.apiUrl + this.deleteProducts.route, httpOptions)
  }

  viewProduct() {
    return this.http[this.listProducts.method](this.apiUrl + this.listProducts.route)
  }
}
