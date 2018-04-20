import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//desd afuera puedo agragar eventos
@Injectable()
export class ColorService {

  private color=new Subject<string>();
  constructor() { }

setColor(newColor: string){
  this.color.next(newColor);
}

getEventColor(){ //me va a retornar un observable
return this.color.asObservable();
}

}
