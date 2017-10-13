import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ListService{
    constructor(public http: Http) {}
    listMovies() {
        return this.http.get("https://swapi.co/api/films");
    }
}