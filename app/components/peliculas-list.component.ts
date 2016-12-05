// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasService} from '../services/pelicula.service';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers: [PeliculasService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
  public checked:number;
  public pelicula:Pelicula;
  public mostrarDatos:boolean;
  public peliculas:Array<Pelicula>;

  constructor(private _peliculasService: PeliculasService) {

    this.mostrarDatos = false;
    this.peliculas = this._peliculasService.getPeliculas();
    this.checked = 1;
    this.pelicula = this.peliculas[0];
  }

  onShowHide(val) {
    this.mostrarDatos = val;
  }

  onCambiarPelicula(pelicula) {
    this.checked = pelicula.id;
    this.pelicula = pelicula;
  }

}