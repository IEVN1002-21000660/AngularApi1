import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { RouterOutlet } from '@angular/router';
import { TemapComponent } from '../temap/temap.component';

@Component({
  selector: 'app-addmessage',
  standalone: true,
  imports: [RouterOutlet, TemapComponent, AddmessageComponent],
  templateUrl: './addmessage.component.html',
  styles: './app.component.css'
})
export class AddmessageComponent {

  constructor(public messajeService: MessageserviceService) {}
}