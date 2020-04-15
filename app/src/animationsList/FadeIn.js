import Animation from "../Animation";

class FadeIn extends Animation {
    constructor(options) {
        super(options);
    }

    show(){
        this.TweenLite.fromTo(this.$element,{opacity: 0}, {opacity: 1, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});
    }
    
    hide(){
        this.TweenLite.fromTo(this.$element,{opacity: 1}, {opacity: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});
    }
    
}

export default FadeIn;

