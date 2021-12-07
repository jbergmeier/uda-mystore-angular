import { Injectable } from '@angular/core';
import { Product } from '../models/product-model'
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data = 'assets/data.json';
  products: Product[] = [];


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.data);
  }

  returnProductArray(): Product[] {
    this.getProducts().subscribe( (product) => {
      this.products = product;
    });

    return this.products;
  }
}
