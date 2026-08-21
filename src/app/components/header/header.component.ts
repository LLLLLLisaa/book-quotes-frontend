import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '@/services/auth.service';

interface TokenPayload {
  name: string;
}


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

    constructor(private authService: AuthService) {
      this.fullName = this.authService.getFullName();
    }
  }