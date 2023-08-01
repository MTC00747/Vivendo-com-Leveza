import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css']
})
export class DepoimentosComponent implements OnInit{
 
  images = [
    '/assets/Imagens/Depoimento1.jpeg',
    '/assets/Imagens/Depoimento2.jpeg',
    '/assets/Imagens/Depoimento3.jpeg',
    '/assets/Imagens/Depoimento4.jpeg'
  ];
  currentSlideIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 7000); // Troca de slide a cada 3 segundos (ajuste conforme necessário)
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Limpar o intervalo quando o componente for destruído
  }
}