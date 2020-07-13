import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallHttpService {
  constructor(private http: HttpClient) {}

  public testCall(): Observable<any> {
    const token = 'Example JWT';
    const headers = new Headers();
    headers.append('authorization', token);
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
