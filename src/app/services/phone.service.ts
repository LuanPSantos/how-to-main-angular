import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable()
export class PhoneService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(`${URL}/phones`);
    }

    findById(id): Observable<any> {
        return this.http.get(`${URL}/phones/${id}`);
    }

    save(phone): Observable<any> {
        return this.http.put<any>(`${URL}/phones/${phone.id}`, phone);
    }

    delete(id): Observable<any> {
        return this.http.delete<any>(`${URL}/phones/${id}`);
    }

    create(phone): Observable<any> {
        return this.http.post<any>(`${URL}/phones`, phone);
    }
}