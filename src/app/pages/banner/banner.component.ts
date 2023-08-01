import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  ngAfterViewInit(){
    ScrollReveal().reveal('.element-animate',{
      duration:3000,
      distance:'150px',
      origin:'left',
      opacity:0,
      easing:'ease-in-out',
      reset:true
    });
  }
}
