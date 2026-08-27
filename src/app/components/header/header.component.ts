import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '@/services/auth.service';
import { ThemeService } from '@/services/theme.service';



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
    

    constructor(private authService: AuthService,private location: Location,public themeService:ThemeService) {
      this.fullName = this.authService.getFullName();
    }

    goBack(): void {
      this.location.back();
    }

    toggleTheme(): void {
      this.themeService.toggleTheme();
    }
  }