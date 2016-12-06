import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router, RouteParams} from 'angular2/router';
import {PeliculasService} from '../services/pelicula.service';
 
@Component({
    templateUrl: 'app/view/crear-pelicula.html',
    providers: [PeliculasService]
})

export class CrearPeliculaComponent implements OnInit{

  public nuevaPelicula:Pelicula;

  constructor(
    private _peliculasService:PeliculasService,
    private _router:Router,
    private _routeParams:RouteParams) {

  }

  onSubmit() {
    this._peliculasService.insertPelicula(this.nuevaPelicula);
    this._router.navigate(["Peliculas"]);
  }

  ngOnInit():any {
    this.nuevaPelicula = new Pelicula(
      0,
      this._routeParams.get("titulo"),
      this._routeParams.get("director"),
      parseInt(this._routeParams.get("anio"))
    );
  }

}