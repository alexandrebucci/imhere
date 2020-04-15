import Animation from "../Animation";

class FadeInUp extends Animation {
    constructor(options) {
        super(options);
    }

    show(){
        this.TweenLite.fromTo(this.$element,{opacity: 0, y: this.translateY}, {opacity: 1, y: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});
    }

    hide(){
        console.log('hide() fade in up');
    }
    
}

export default FadeInUp;

