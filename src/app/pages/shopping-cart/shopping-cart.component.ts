import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../Models/product.model';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-shopping-cart',
  imports: [NgFor, NgIf, FormsModule, NgClass],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  @ViewChild('cartModalRef') cartModalRef!: ElementRef;

  sortByDropDownOpen = false;
  categoryDropDownOpen = false;
  filterTopDropDownOpen = false;
  filterTopList = false;
  // filters: any[] = [];
  sortByOptions = [
    'All Products',
    'Popularity',
    'Price: High to Low',
    'Price: Low to High',
    'Discount',
  ];
  selectedOption = 'All Products';
  selectedCategoryOption: string = '';

  ngOnInit(): void {
    // this.http.get<any>('/assets/test.json').subscribe((data) => {
    //   this.filters = data;
    // });
    // console.log(this.filters);
  }

  toggleDropdown() {
    this.sortByDropDownOpen = !this.sortByDropDownOpen;
  }
  toggleCategoryDropdown() {
    this.categoryDropDownOpen = !this.categoryDropDownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.sortByDropDownOpen = false;
  }

  selectCategoryOption(option: string) {
    this.selectedCategoryOption = option;
    this.categoryDropDownOpen = false;
  }
  filterSingleDropdownOpen = false;

  toggleFilterSingleDropdown() {
    this.filterSingleDropdownOpen = !this.filterSingleDropdownOpen;
  }

  toggleFilterTopDropdown() {
    this.filterTopDropDownOpen = !this.filterTopDropDownOpen;
  }

  toggleFilterTopList() {
    this.filterTopList = !this.filterTopList;
  }

  products: Product[] = [
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 12,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 4,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 0,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 7,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 12,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 0,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Cleaning & Household',
      stockId: 'FNSRM0000048147',
      price: 500,
      stock: 13,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 3,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 18,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Personal Care',
      stockId: 'FNSRM0000048123',
      price: 300,
      stock: 3,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
    {
      name: 'Groceries',
      stockId: 'FNSRM0000048999',
      price: 250,
      stock: 18,
      imageUrl: 'https://placehold.jp/200x200.png',
    },
  ];

  selectedNavFilterTitleDisplay = 'Select a filter';
  selectedNavFilterTitle: any = null;
  selectedNavFilterOptionId = '';

  selectNavFilterTitle(filter: any) {
    this.selectedNavFilterTitleDisplay = filter.title;
    this.selectedNavFilterTitle = filter;
    this.selectedNavFilterOptionId = '';
  }

  selectNavFilterOption(optionId: string) {
    this.selectedNavFilterOptionId = optionId;
    console.log('Selected Option Id: ', optionId);
  }

  cart: Product[] = [];

  addToCart(product: Product) {
    const existing = this.cart.find((item) => item.stockId === product.stockId);
    if (existing) {
      existing.quantity! += product.quantity || 1;
    } else {
      const newItem = { ...product, quantity: product.quantity || 1 };
      this.cart.push(newItem);
    }

    product.quantity = 1;
  }

  openCartModal() {
    const modal = new bootstrap.Modal(this.cartModalRef.nativeElement);
    modal.show();
  }

  closeCartModal() {
    if (this.cartModalRef != null) {
      this.cartModalRef.nativeElement.style.display = 'none';
    }
  }

  removeItem(item: any) {
    this.cart = this.cart.filter((i) => i !== item);
  }

  incrementQty(product: Product) {
    if (!product.quantity) product.quantity = 1;
    product.quantity++;
  }

  decrementQty(product: Product) {
    if (!product.quantity) product.quantity = 1;
    if (product.quantity > 1) product.quantity--;
  }

  get totalQty() {
    return this.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  get totalAmount(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }
  items = [
    { label: 'Computer', value: 'computer' },
    { label: 'Mango', value: 'mango' },
    { label: 'Banana', value: 'banana' },
    { label: 'Car', value: 'car' },
    { label: 'Laptop', value: 'laptop' },
  ];

  selectedValue = this.items[0].value; // default selected
  expanded = false; // collapsed initially

  toggleExpand() {
    this.expanded = !this.expanded;
  }
  filters = [
    {
      title: 'Division',
      options: [
        { id: '1', label: 'Alpha' },
        { id: '2', label: 'Beta' },
        { id: '3', label: 'Gamma' },
        { id: '4', label: 'Delta' },
        { id: '5', label: 'Epsilon' },
        { id: '6', label: 'Zeta' },
        { id: '7', label: 'Eta' },
        { id: '8', label: 'Theta' },
        { id: '9', label: 'Iota' },
        { id: '10', label: 'Kappa' },
      ],
    },
    {
      title: 'Category',
      options: [
        { id: '11', label: 'Apple' },
        { id: '12', label: 'Banana' },
        { id: '13', label: 'Cherry' },
        { id: '14', label: 'Date' },
        { id: '15', label: 'Elderberry' },
        { id: '16', label: 'Fig' },
        { id: '17', label: 'Grape' },
        { id: '18', label: 'Honeydew' },
        { id: '19', label: 'Kiwi' },
        { id: '20', label: 'Lemon' },
      ],
    },
    {
      title: 'Sub Category',
      options: [
        { id: '21', label: 'Rock' },
        { id: '22', label: 'Jazz' },
        { id: '23', label: 'Pop' },
        { id: '24', label: 'Classical' },
        { id: '25', label: 'Hip Hop' },
        { id: '26', label: 'Country' },
        { id: '27', label: 'Reggae' },
        { id: '28', label: 'Blues' },
        { id: '29', label: 'Folk' },
        { id: '30', label: 'Electronic' },
      ],
    },
    {
      title: 'Brand',
      options: [
        { id: '31', label: 'Nike' },
        { id: '32', label: 'Adidas' },
        { id: '33', label: 'Puma' },
        { id: '34', label: 'Reebok' },
        { id: '35', label: 'Under Armour' },
        { id: '36', label: 'Converse' },
        { id: '37', label: 'Vans' },
        { id: '38', label: 'Fila' },
        { id: '39', label: 'Champion' },
        { id: '40', label: 'New Balance' },
      ],
    },
    {
      title: 'Season',
      options: [
        { id: '41', label: 'Spring' },
        { id: '42', label: 'Summer' },
        { id: '43', label: 'Autumn' },
        { id: '44', label: 'Winter' },
        { id: '45', label: 'Rainy' },
        { id: '46', label: 'Dry' },
        { id: '47', label: 'Humid' },
        { id: '48', label: 'Chilly' },
        { id: '49', label: 'Stormy' },
        { id: '50', label: 'Breezy' },
      ],
    },
    {
      title: 'Year',
      options: [
        { id: '51', label: '2015' },
        { id: '52', label: '2016' },
        { id: '53', label: '2017' },
        { id: '54', label: '2018' },
        { id: '55', label: '2019' },
        { id: '56', label: '2020' },
        { id: '57', label: '2021' },
        { id: '58', label: '2022' },
        { id: '59', label: '2023' },
        { id: '60', label: '2024' },
      ],
    },
    {
      title: 'Occasion',
      options: [
        { id: '61', label: 'Birthday' },
        { id: '62', label: 'Wedding' },
        { id: '63', label: 'Anniversary' },
        { id: '64', label: 'Graduation' },
        { id: '65', label: 'Festival' },
        { id: '66', label: 'Casual' },
        { id: '67', label: 'Formal' },
        { id: '68', label: 'Party' },
        { id: '69', label: 'Business' },
        { id: '70', label: 'Travel' },
      ],
    },
    {
      title: 'Gender',
      options: [
        { id: '71', label: 'Male' },
        { id: '72', label: 'Female' },
        { id: '73', label: 'Unisex' },
        { id: '74', label: 'Boys' },
        { id: '75', label: 'Girls' },
        { id: '76', label: 'Men' },
        { id: '77', label: 'Women' },
        { id: '78', label: 'Kids' },
        { id: '79', label: 'Infants' },
        { id: '80', label: 'Others' },
      ],
    },
    {
      title: 'Base Item',
      options: [
        { id: '81', label: 'Shirt' },
        { id: '82', label: 'Pants' },
        { id: '83', label: 'Skirt' },
        { id: '84', label: 'Shorts' },
        { id: '85', label: 'Dress' },
        { id: '86', label: 'Jacket' },
        { id: '87', label: 'Coat' },
        { id: '88', label: 'Blazer' },
        { id: '89', label: 'Jeans' },
        { id: '90', label: 'Sweater' },
      ],
    },
    {
      title: 'Variant',
      options: [
        { id: '91', label: 'Small' },
        { id: '92', label: 'Medium' },
        { id: '93', label: 'Large' },
        { id: '94', label: 'XL' },
        { id: '95', label: 'XXL' },
        { id: '96', label: 'Slim Fit' },
        { id: '97', label: 'Regular Fit' },
        { id: '98', label: 'Loose Fit' },
        { id: '99', label: 'Skinny Fit' },
        { id: '100', label: 'Comfort Fit' },
      ],
    },
    {
      title: 'Color',
      options: [
        { id: '101', label: 'Red' },
        { id: '102', label: 'Blue' },
        { id: '103', label: 'Green' },
        { id: '104', label: 'Yellow' },
        { id: '105', label: 'Black' },
        { id: '106', label: 'White' },
        { id: '107', label: 'Orange' },
        { id: '108', label: 'Purple' },
        { id: '109', label: 'Pink' },
        { id: '110', label: 'Grey' },
      ],
    },
  ];
}
