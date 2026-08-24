import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, type BookRequest } from '@/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5266/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: BookRequest): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: BookRequest): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}