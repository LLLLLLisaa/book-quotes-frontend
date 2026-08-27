import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '@/services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Input() showNavigation = false;
    fullName = '';
    isDarkMode = false;

    constructor(private authService: AuthService,private location: Location) {
      this.fullName = this.authService.getFullName();
    }

    goBack(): void {
      this.location.back();
    }

    toggleTheme(): void {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.setAttribute(
        'data-bs-theme',
        this.isDarkMode ? 'dark' : 'light'
      );
    }
  }