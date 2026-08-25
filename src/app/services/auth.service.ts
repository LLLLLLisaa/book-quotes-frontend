import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    id: string;
    email: string;
    fullName: string;
  }


export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface ApiResponse {
    message: string;
  }

export interface LoginRequest {
email: string;
password: string;
}

export interface LoginResponse {
token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://book-quotes-backend-production.up.railway.app/api/auth';

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/register`,
      request
    );
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      request
    );
  }

  getFullName(): string {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return '';
    }
  
    const decoded = jwtDecode<TokenPayload>(token);
  
    return decoded.fullName;
  }
}