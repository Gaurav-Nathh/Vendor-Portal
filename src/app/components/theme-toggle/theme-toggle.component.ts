import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  isDarkMode = false;
  constructor(private themeService: ThemeService) {}

  // ngOngInit(): void {
  //   this.themeService.initTheme();
  //   this.themeService.getCurrentTheme();
  // }

  // toggleTheme(): void {
  //   this.themeService.toggleTheme();
  // }

  ngOnInit(): void {
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark-theme';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}
