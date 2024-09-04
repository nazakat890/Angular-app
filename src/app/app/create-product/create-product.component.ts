import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 createproductForm:FormGroup
  constructor(private productservice:ProductsService,private router:Router) { }

ngOnInit(): void {
this.createproductForm = new FormGroup({
  productName:new FormControl(null, [Validators.required]),
  product_Categories:new FormControl(null, [Validators.required]),
  price:new FormControl(null, [Validators.required])
});
}
onSubmit(){
let product =this.createproductForm.value;
this.productservice.addProducts(product).subscribe(
  (res:any) =>{
    console.log(res)
    if(res.status ==='success'){
      Swal.fire('Done', 'product Created Successfully', 'success');
      this.router.navigate(['dashboard/products']);
    } 
  },
(err) =>{
  console.log(err);
}
)
}

}
