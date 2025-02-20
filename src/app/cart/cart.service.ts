import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + "/cart";
  private apiCheckoutUrl = environment.apiUrl + "/checkout";

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCartItems(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart() : Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkOut(products: Product[]) : Observable<void> {
    console.log(products)
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }

}
