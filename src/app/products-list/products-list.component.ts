import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products;
  constructor(private productservice: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (res: any) => {
        this.products = res.productdata;
      },
      (err) => {
        Swal.fire('Server Down');
      }
    );
  }

  onCreate(){
    this.router.navigate(['/dashboard/createp'])
  }

  onDelete(id) {
    this.productservice.deleteProduct(id).subscribe((res) => {

      this.productservice.getProducts().subscribe((res: any) => {
        this.products = res.productdata;
      });
    });
  }

  onEdit(id) {
    this.router.navigate(['/dashboard/edit/product/' + id]);
  }
}
