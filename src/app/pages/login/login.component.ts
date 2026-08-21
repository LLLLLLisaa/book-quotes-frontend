import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { HeaderComponent } from '@/components/header/header.component';
import { ROUTES } from '@/app.routes';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const request = this.loginForm.getRawValue();

    this.authService.login(request).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate([ROUTES.home]);
      },

      error: (error) => {
        alert(error.error.message);
        this.loginForm.controls.password.reset();
      }
    });
  }
}