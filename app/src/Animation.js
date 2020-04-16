import {TweenLite, Linear} from "gsap";

class Animation {
    constructor(options) {
        this.options = options;

        this.$element = this.options.element;
        this.animation = this.options.animation;
        this.duration = this.options.duration;
        this.easing = this.options.easing;
        this.delay = this.options.delay;
        this.translateX = this.options.translateX;
        this.translateY = this.options.translateY;

        this.TweenLite = TweenLite;
        this.Linear = Linear;
    }

    show(){
        if(!this.$element.classList.contains('yesImHere'))
            this.$element.classList.add('yesImHere');
    }

    hide(){
        if(this.$element.classList.contains('yesImHere'))
            this.$element.classList.remove('yesImHere');
        
        this.delay = 0;
        this.duration = 0.3;
    }
}

export default Animation;

