import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuAberto : boolean = false
  abrirMenu(){
    if(!this.menuAberto){
      this.menuAberto = true
      
    }else{
      this.menuAberto = false
    }
  }
}
