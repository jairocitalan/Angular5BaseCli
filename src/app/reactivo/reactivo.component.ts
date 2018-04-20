import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
//aqui voy a capear todos mis eventos
@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  newColor:string = '#ff0000';
  constructor(private _colorServices: ColorService) {

   }

  ngOnInit() {
    this._colorServices.getEventColor()
    .subscribe(value => this.newColor=value );
  }



}
