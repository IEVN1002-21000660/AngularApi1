import { Component } from '@angular/core';
import { TemahComponent } from "../temah/temah.component";

@Component({
  selector: 'app-temap',
  standalone: true,
  imports: [TemahComponent],
  templateUrl: './temap.component.html',
  styles: ``
})
export class TemapComponent {
  title = 'Deste el padre'
  mensaje2 : string = "";

  recibiMensaje(mensaje : string){
    this.mensaje2 = mensaje;
  }
}