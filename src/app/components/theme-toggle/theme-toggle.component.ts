import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}

  ngOngInit(): void {
    this.themeService.initTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
