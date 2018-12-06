import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  //Recordar que en el constructor de un componente podemos declarar los servicios que vamos a utilizar

  //ActivateRoute contiene informacion acerca de la ruta a esta instancia de HeroDetailComponent
  //HeroService obtiene los datos hero del servidor remoto y este componente usará esto para obtener el hero para desplegar
  //Location es un servicio de Angular para interactuar con el navegador
  

  constructor(
  	private route: ActivatedRoute,
  	private heroService: HeroService,
  	private location: Location
  	) { }
  
  ngOnInit(): void {
  	this.getHero();
  }

  getHero(): void{
	const id = +this.route.snapshot.paramMap.get('id');
	this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack():void{
  	this.location.back();
  }
//route.snapshot es una imágen estática de información breve de la ruta después que el componente fue creado
//paramMap es un diccionario de valores de parámetros de ruta extraido de la URL
//el operador (+) convierte los strings a números

}