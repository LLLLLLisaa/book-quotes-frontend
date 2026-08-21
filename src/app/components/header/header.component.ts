import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { ROUTES } from '@/app.routes';



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
    routes = ROUTES;

    constructor(private authService: AuthService) {
      this.fullName = this.authService.getFullName();
    }
  }