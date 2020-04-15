import Animation from "../Animation";

class FadeInLeft extends Animation {
    constructor(options) {
        super(options);
    }

    show(){
        this.TweenLite.fromTo(this.$element,{opacity: 0, x: -this.translateX}, {opacity: 1, x: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});
    }

    hide(){
        console.log('hide() Fade in left');
    }
    
}

export default FadeInLeft;

