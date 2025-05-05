import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sidebarStyle = new BehaviorSubject<string>('shrink');
  private sidebarVisible = new BehaviorSubject<boolean>(true);
  private shoppingCartVisible = new BehaviorSubject<boolean>(false);

  sidebarStyle$ = this.sidebarStyle.asObservable();
  sidebarVisible$ = this.sidebarVisible.asObservable();
  shoppingCartVisible$ = this.shoppingCartVisible.asObservable();

  getCurrentSidebarStyle() {
    return this.sidebarStyle.value;
  }

  setSidebarStyle(style: string) {
    this.sidebarStyle.next(style);
  }

  toggleSidebarStyle() {
    // const newStyle =
    //   this.sidebarStyle.value === 'shrink' ? 'overlay' : 'shrink';
    // this.sidebarStyle.next(newStyle);
  }

  toggleSidebarVisibility() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  getSidebarVisibility() {
    return this.sidebarVisible.value;
  }

  toggleShoppingCartVisibility() {
    console.log(this.shoppingCartVisible.value);
    this.shoppingCartVisible.next(!this.shoppingCartVisible.value);
  }

  getShoppingCartVisibility() {
    return this.shoppingCartVisible.value;
  }
}
