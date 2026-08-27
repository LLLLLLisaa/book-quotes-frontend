import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class ThemeService {

    isDarkMode = false;
  
    toggleTheme(): void {
      this.isDarkMode = !this.isDarkMode;
  
      document.documentElement.setAttribute(
        'data-bs-theme',
        this.isDarkMode ? 'dark' : 'light'
      );
    }
  }