import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators;

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

}