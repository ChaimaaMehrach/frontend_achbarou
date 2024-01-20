
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proprietaire } from './proprietaire';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080/Personnes";

  constructor(private httpClient : HttpClient) { }

  
    verifyEmailAndPassword(email: string, password: string): Observable<string> { // Change the return type to Observable<string>
      const apiUrl = `${this.baseUrl}/connect/${email}/${password}`;
  
      return this.httpClient.get(apiUrl, { responseType: 'text' })  // Set responseType to 'text'
        .pipe(
          catchError((error: HttpErrorResponse) => {
            // Handle errors here
            console.error('Error during login:', error);
            return throwError('An error occurred during login');
          })
        );

}
}