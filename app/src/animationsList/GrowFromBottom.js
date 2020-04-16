import Animation from "../Animation";

class GrowFromBottom extends Animation {
    constructor(options) {
        super(options);

        this.$children = this.$element.children;
    }

    show(){
        super.show();

        for(let i = 0; i < this.$children.length; i++){
            this.$children[i].style.opacity = 0;
        }

        this.TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        this.TweenLite.fromTo(this.$element,{css:{transform: "scale3D(1,0,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});

        for(let i = 0; i < this.$children.length; i++){
            this.TweenLite.to(this.$children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: this.Linear[this.easing]()});
        }
    }

    hide(){
        super.hide();
        console.log('hide() grow from bottom');

        for(let i = 0; i < this.$children.length; i++){
            this.TweenLite.to(this.$children[i],{opacity: 0, duration: 0.1, delay: 0, ease: this.Linear[this.easing]()} );
        }
        
        this.TweenLite.fromTo(this.$element,{css:{transform: "scale3D(1,1,1)"}}, {css:{transform: "scale3D(1,0,1)"}, duration: this.duration, delay: 0.2 , ease: this.Linear[this.easing]()}); 
    }
    
}

export default GrowFromBottom;

