import '../styles/app.scss';

import ImHere from './Imhere';

class Main {
  constructor() {
    this.init = this.init.bind(this);
    this.animate = this.animate.bind(this);
    document.addEventListener('DOMContentLoaded', this.init);

    // array to stock I'm Here instances
    this.imHereInstancesArray = [];
    
    // check if all intancies have been created
    this.allIhInstancesCreated = false;

    // viewport sizes
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;

    // sections background
    this.imhBg = ['#9CA3A6','#AEB7BF','#B0BBBF','#D2D6D9','#F2F2F2'];
  }

  init(){
    this.initImHere();
    this.animate();
  }

  // to create instances of I'm Here
  initImHere(){
    // get html element
    let $imhere = [...document.querySelectorAll('.imhere')];
    let $sections = [...document.querySelectorAll('section')];
    this.colorSectionsBg($sections);

    // instances creation loop through all $imhere 
    for(let i = 0; i < $imhere.length; i++){
      this.imHereInstancesArray.push(new ImHere($imhere[i]));

      if(i == $imhere.length - 1){
        this.allIhInstancesCreated = true;
        
      }
    }
  }

  colorSectionsBg(array){
    let index = 0;
    let limit = this.imhBg.length - 1;

    for(let i = 0; i < array.length; i++){
      array[i].style.backgroundColor = this.imhBg[index];

       if(index == limit){
         index = 0;
       } else {
         index++;
       }
    }
    
  }

  // animate RAF
  animate(){

    if(this.allIhInstancesCreated) {
      for(let i = 0; i < this.imHereInstancesArray.length; i++){
        this.imHereInstancesArray[i].checkVisibility(this.viewportHeight);
      }
    }

    window.requestAnimationFrame(this.animate);
  }
}

new Main();