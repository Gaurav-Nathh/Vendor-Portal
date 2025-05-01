import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';
  private lightThemeClass = 'light-theme';
  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Getting the theme from browser
      const prefersDark = window.matchMedia('(prefers-color: dark)').matches;
      const defaultTheme = prefersDark
        ? this.darkThemeClass
        : this.lightThemeClass;
      this.setTheme(defaultTheme);
    }
  }

  toggleTheme(): void {
    const isDarkMode = document.body.classList.contains(this.darkThemeClass);
    const newTheme = isDarkMode ? this.lightThemeClass : this.darkThemeClass;
    this.setTheme(newTheme);
  }

  setTheme(theme: string): void {
    document.body.classList.remove(this.darkThemeClass, this.lightThemeClass);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  getCurrentTheme(): string {
    return document.body.classList.contains(this.darkThemeClass)
      ? this.darkThemeClass
      : this.lightThemeClass;
  }
}
