import Animation from "../Animation";

class FadeInUp extends Animation {
    constructor(options) {
        super(options);
        this.animation = this.TweenLite.fromTo(this.$element,{opacity: 0, y: this.translateY}, {opacity: 1, y: 0, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing](), paused: true});
    
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

export default FadeInUp;

