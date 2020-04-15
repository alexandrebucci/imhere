import Animation from "../Animation";

class FadeInRight extends Animation {
    constructor(options) {
        super(options);
    }

    show(){
        this.TweenLite.fromTo(this.$element,{opacity: 0, x: this.translateX}, {opacity: 1, x: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});
    }

    hide(){
        console.log('hide() fade in right')
    }
    
}

export default FadeInRight;

