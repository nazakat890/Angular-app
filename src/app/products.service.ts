import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
    private router: Router) { }

  addProducts(product) {
    return this.http.post(
      'http://192.168.20.172:3000/api/product/createProduct', product
    );
  }

  getProducts(){
    return this.http.get("http://192.168.20.172:3000/api/product/allProduct")
  }


  getOne(id){
    return this.http.get('http://192.168.20.172:3000/api/product/getProduct/'+id)
  }

  deleteProduct(id){
    return this.http.delete('http://192.168.20.172:3000/api/product/deleteProduct/'+id)
  }
  editProduct(id,product){
    this.http.put('http://192.168.20.172:3000/api/product/updateProduct/'+id,product).subscribe(res=>{
      this.router.navigate(['dashboard'])
    })
  }
}
