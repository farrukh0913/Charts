import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

export class HttpService {
    private baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    get<T, K>(endpoint: string, data: K): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}${endpoint}`, data);
    }

    post<T, K>(endpoint: string, data: K, responseType?: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}${endpoint}`, data, responseType);
    }

}
