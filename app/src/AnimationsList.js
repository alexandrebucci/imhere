import {TweenLite, Linear} from "gsap";

class AnimationsList {
    constructor(options) {

        this.options = options;

        this.$element = this.options.element;
        this.animation = this.options.animation;
        this.duration = this.options.duration;
        this.easing = this.options.easing;
        this.delay = this.options.delay;
        this.translateX = this.options.translateX;
        this.translateY = this.options.translateY;


        this[this.animation]();
    }
    

    fadeIn(){
        TweenLite.fromTo(this.$element,{opacity: 0}, {opacity: 1, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});
    }

    fadeInUp(){
        TweenLite.fromTo(this.$element,{opacity: 0, y: this.translateY}, {opacity: 1, y: 0, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});
    }

    fadeInDown(){
        TweenLite.fromTo(this.$element,{opacity: 0, y: -this.translateY}, {opacity: 1, y: 0, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});
    }

    fadeInLeft(){
        TweenLite.fromTo(this.$element,{opacity: 0, x: -this.translateX}, {opacity: 1, x: 0, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});
    }

    fadeInRight(){
        TweenLite.fromTo(this.$element,{opacity: 0, x: this.translateX}, {opacity: 1, x: 0, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});
    }

    growFromTop(){
        let $children = this.$element.children;

        for(let i = 0; i < $children.length; i++){
            $children[i].style.opacity = 0;
        }

        TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        TweenLite.fromTo(this.$element,{css:{transform: "scale3D(1,0,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});

        for(let i = 0; i < $children.length; i++){
            TweenLite.to($children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: Linear[this.easing]()});
        }
    }

    growFromBottom(){
        let $children = this.$element.children;

        for(let i = 0; i < $children.length; i++){
            $children[i].style.opacity = 0;
        }

        TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        TweenLite.fromTo(this.$element,{css:{transform: "scale3D(1,0,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});

        for(let i = 0; i < $children.length; i++){
            TweenLite.to($children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: Linear[this.easing]()});
        }
    }

    growFromLeft(){
        let $children = this.$element.children;

        for(let i = 0; i < $children.length; i++){
            $children[i].style.opacity = 0;
        }

        TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        TweenLite.fromTo(this.$element,{css:{transform: "scale3D(0,1,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});

        for(let i = 0; i < $children.length; i++){
            TweenLite.to($children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: Linear[this.easing]()});
        }
    }

    growFromRight(){
        let $children = this.$element.children;

        for(let i = 0; i < $children.length; i++){
            $children[i].style.opacity = 0;
        }

        TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        TweenLite.fromTo(this.$element,{css:{transform: "scale3D(0,1,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: Linear[this.easing]()});

        for(let i = 0; i < $children.length; i++){
            TweenLite.to($children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: Linear[this.easing]()});
        }
    }
}

export default AnimationsList;

