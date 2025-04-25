import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private cartToggleService = new Subject<void>();
  cartToggle$ = this.cartToggleService.asObservable();

  toggleCart() {
    this.cartToggleService.next();
  }
}
