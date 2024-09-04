import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id;
  product: any = {};
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService
  ) {}
  editForm: FormGroup;
  ngOnInit(): void {
    this.editForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      p_cetegories: new FormControl(null, [Validators.required]),
    });
    
    this.id = this.activatedroute.snapshot.params['id'];
    this.productservice.getOne(this.id).subscribe((data: any) => {
      console.log(data);
      this.editForm.setValue({
        productName: data.data.productName,
        price: data.data.price,
        p_cetegories: data.data.p_cetegories.categories_Name,
      });
    });
   
  }
  onSubmit() {
    let product = this.editForm.value;
    this.productservice.editProduct(this.id, product);
  }

}
