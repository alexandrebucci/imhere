// Animation classes 
import FadeIn from "./animationsList/FadeIn";
import FadeInDown from "./animationsList/FadeInDown";
import FadeInLeft from "./animationsList/FadeInLeft";
import FadeInRight from "./animationsList/FadeInRight";
import FadeInUp from "./animationsList/FadeInUp";
import GrowFromBottom from "./animationsList/GrowFromBottom";
import GrowFromLeft from "./animationsList/GrowFromLeft";
import GrowFromRight from "./animationsList/GrowFromRight";
import GrowFromTop from "./animationsList/GrowFromTop";

class ImHere {
    constructor(element) {

        // to know if the element is visible or not
        this.isVisible = false;

        // default animation parameters
        this.defaultOffset = 0;
        this.defaultAnimation = 'FadeIn';
        this.defaultDuration = 0.6;
        this.defaultEasing = 'easeNone';
        this.defaultDelay = 0;
        this.defaultTx = 30;
        this.defaultTy = 30; 

        // get element and all their data attributes
        this.$imhere = element;
        this.offset = parseInt(this.$imhere.getAttribute('imh-offset')) || this.defaultOffset;
        this.appearanceAnimation = element.getAttribute('imh-appear') || this.defaultAnimation;
        this.duration = parseInt(element.getAttribute('imh-duration')) || this.defaultDuration;
        this.easing = element.getAttribute('imh-easing') || this.defaultEasing;
        this.delay = parseInt(element.getAttribute('imh-delay')) || this.defaultDelay;
        this.translateX = parseInt(element.getAttribute('imh-tx')) || this.defaultTx;
        this.translateY = parseInt(element.getAttribute('imh-ty')) || this.defaultTy;
    
        // array of all animation types & easing types
        this.typesOfAppearanceArray = ['FadeIn', 'FadeInUp', 'FadeInDown', 'FadeInLeft','FadeInRight','GrowFromLeft','GrowFromRight','GrowFromTop','GrowFromBottom'];
        this.typesOfEasingArray = ['easeIn','easeInOut','easeNone','easeOut'];

        // get scroll top number
        this.scrollTop = parseInt(document.documentElement.scrollTop);

        // get the distance between the top of the element and the top of the window
        // we use this.scrolltop in case of not reload at the top of the page
        this.topRect = (this.$imhere.getBoundingClientRect().top + this.scrollTop);
        this.bottomRect = (this.$imhere.getBoundingClientRect().bottom + this.scrollTop);
        this.top = this.topRect + this.offset;
        this.bottom = this.bottomRect;

        // animation verification function
        this.verifTypeOfAnimation(this.appearanceAnimation);
        this.verifTypeOfEasing(this.easing);

        this.options = {
            element: this.$imhere,
            animation: this.appearanceAnimation,
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            translateX: this.translateX,
            translateY: this.translateY
        }

        this.currentAnimation = this.options.animation;

        this.createInstance();
    }

    createInstance(){
        switch (this.currentAnimation) {
			case "FadeIn" : 
				this.animationInst = new FadeIn(this.options);
				break;
            case "FadeInDown" : 
				this.animationInst = new FadeInDown(this.options);
                break;
            case "FadeInLeft" : 
				this.animationInst = new FadeInLeft(this.options);
                break;
            case "FadeInRight" : 
				this.animationInst = new FadeInRight(this.options);
                break;
            case "FadeInUp" : 
				this.animationInst = new FadeInUp(this.options);
                break;
            case "GrowFromBottom" : 
				this.animationInst = new GrowFromBottom(this.options);
                break;
            case "GrowFromLeft" : 
				this.animationInst = new GrowFromLeft(this.options);
                break;
            case "GrowFromRight" : 
				this.animationInst = new GrowFromRight(this.options);
                break;
            case "GrowFromTop" : 
				this.animationInst = new GrowFromTop(this.options);
                break;
        }
    }

    // check if the element is visible
    checkVisibility(winHeight){
        // watch if the element is visible
        this.scrollTop = parseInt(document.documentElement.scrollTop);

        if(this.top <= this.scrollTop + winHeight && this.bottom >= (this.scrollTop + this.offset)){
            if(!this.isVisible){
                this.animationInst.show();
                this.isVisible = true;
            }
        } else {
            if(this.isVisible){
                this.animationInst.hide();
                this.isVisible = false;
            }
        }
    }

    // to verify if the animation exists, if not use an existing animation
    verifTypeOfAnimation(animation){
        let animationVerification = this.typesOfAppearanceArray.includes(animation);
        this.appearanceAnimation = animationVerification ? animation : this.defaultAnimation;
    }

    // to verify if the easing exists, if not use an existing easing
    verifTypeOfEasing(easing){
        let easingVerification = this.typesOfEasingArray.includes(easing);
        this.easing = easingVerification ? easing : this.defaultEasing;
    }

}

export default ImHere;