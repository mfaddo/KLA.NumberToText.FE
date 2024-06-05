import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberToTextService {

  private apiUrl = 'http://localhost:5079/api/NumbertToText'; // Replace with your API URL


  constructor(private http: HttpClient) { }
  getText(number: string): Observable<string> {
    return this.http.get(`${this.apiUrl}?number=${number}` ,  { responseType: 'text' }).pipe(
      catchError(this.handleError<string>('getText', ''))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
