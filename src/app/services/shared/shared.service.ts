import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sidebarStyle = new BehaviorSubject<'shrink' | 'overlay'>('shrink');
  private sidebarVisible = new BehaviorSubject<boolean>(true);

  sidebarStyle$ = this.sidebarStyle.asObservable();
  sidebarVisible$ = this.sidebarVisible.asObservable();

  getCurrentSidebarStyle(): 'shrink' | 'overlay' {
    return this.sidebarStyle.value;
  }

  setSidebarStyle(style: 'shrink' | 'overlay') {
    this.sidebarStyle.next(style);
  }

  toggleSidebarStyle() {
    const newStyle =
      this.sidebarStyle.value === 'shrink' ? 'overlay' : 'shrink';
    this.sidebarStyle.next(newStyle);
  }

  toggleSidebarVisibility() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  getSidebarVisibility() {
    return this.sidebarVisible.value;
  }
}
