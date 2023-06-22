import { Component } from '@angular/core';
import { ApiService } from '../api.service';
interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  productName: string='';
  productPrice: number=0;
  searchQuery: string='';

  
  constructor(private apiService: ApiService) {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data;
      },
      error => {
        // Handle error while fetching products
      }
    );
  }
  


  addProduct() {
    const newProduct: Product = {
      id: this.products.length + 1,
      name: this.productName,
      year: new Date().getFullYear(),
      color: '',
      pantone_value: '',
      price: 0
    };
  
    this.products.push(newProduct);
  
    // Reset the form fields
    this.productName = '';
    this.productPrice = 0;
  }
  

  filterProducts(): Product[] {
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product => product.name.toLowerCase().includes(query));
    } else {
      return this.products;
    }
  }
  logout(): void {
    window.location.href = '/login';
  }


}
