import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal'
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  ngAfterViewInit(){
    ScrollReveal().reveal('.element-animate',{
      duration:1000,
      distance:'150px',
      origin:'left',
      opacity:0,
      easing:'ease-in-out',
      reset:true
    });
    ScrollReveal().reveal('.element-animate1',{
      duration:2000,
      distance:'100px',
      origin:'left',
      opacity:0,
      easing:'ease-in-out',
      reset:true
    });
    ScrollReveal().reveal('.element-animate2',{
      duration:3000,
      distance:'50px',
      origin:'left',
      opacity:0,
      easing:'ease-in-out',
      reset:true
    });
    
    }
}
