import Animation from "../Animation";

class GrowFromTop extends Animation {
    constructor(options) {
        super(options);
    }

    show(){
        let $children = this.$element.children;

        for(let i = 0; i < $children.length; i++){
            $children[i].style.opacity = 0;
        }

        this.TweenLite.to(this.$element, {opacity: 1, duration: 0, delay: 0});
        this.TweenLite.fromTo(this.$element,{css:{transform: "scale3D(1,0,1)"}}, {css:{transform: "scale3D(1,1,1)"}, duration: this.duration, delay: this.delay, ease: this.Linear[this.easing]()});

        for(let i = 0; i < $children.length; i++){
            this.TweenLite.to($children[i],{opacity: 1, duration: this.duration, delay: this.duration + 0.2, ease: this.Linear[this.easing]()});
        }
    }

    hide(){
        console.log('hide() grow from top');
    }
    
}

export default GrowFromTop;

