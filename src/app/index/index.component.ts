import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "assets/Images/Alies_logo_DRAP.png"},
    {img: "assets/Images/Alies_logo_IPO.png"},
    {img: "assets/Images/Alies_logo_mOfa.png"},
    {img: "assets/Images/Alies_logoNIH.png"}
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay" : true,
    
    // "infinite": true,
    "dots": true,
  };
  
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}

