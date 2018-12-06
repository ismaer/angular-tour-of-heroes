import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({  providedIn: 'root' })
export class HeroService {

 //declaro dentro del constructor los servicios que voy a utilizar
 constructor(private http: HttpClient,
  private messageService: MessageService) { }

 /** Log a HeroService message with the MessageService */
 private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
 }

 private heroesUrl = 'api/heroes';  // URL to web api
 
 /** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}

 getHero(id: number): Observable<Hero> {
	this.messageService.add(`HeroService: fetched hero id=${id}`);
	return of(HEROES.find(hero => hero.id === id));
 }
  
 }
