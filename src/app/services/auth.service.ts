import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface ApiResponse {
    message: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5266/api/auth';

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/register`,
      request
    );
  }
}