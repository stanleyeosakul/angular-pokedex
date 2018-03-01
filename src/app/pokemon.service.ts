import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  // Get all the Pokemon!
  getPokemon(): Observable<object> {
    return this.http.get('../assets/data/pokelist.json');
  }

  // Search by Query
  searchQuery(query: string, array: object[], parameter: string): any {
    return array.filter(p => p[parameter].toLowerCase().includes(query.toLowerCase()));
  }

}
