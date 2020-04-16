import Animation from "../Animation";

class FadeInLeft extends Animation {
    constructor(options) {
        super(options);
        this.animation = this.TweenLite.fromTo(this.$element,{opacity: 0, x: -this.translateX}, {opacity: 1, x: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing](), paused: true});
    }

    show(){
        super.show();
        this.animation.play();
    }
    
    hide(){
        super.hide();
        this.animation.reverse();
    }
}

export default FadeInLeft;

