import AnimationsList from "./AnimationsList";

class ImHere {
    constructor(element) {

        this.animated = false;

        // default animation parameters
        this.defaultOffset = 0;
        this.defaultAnimation = 'fadeIn';
        this.defaultDuration = 0.6;
        this.defaultEasing = 'easeNone';
        this.defaultDelay = 0;
        this.defaultTx = 30;
        this.defaultTy = 30; 
        
        
        // get element and all data attributes
        this.$imhere = element;
        this.offset = parseInt(this.$imhere.getAttribute('imh-offset')) || this.defaultOffset;
        this.appearanceAnimation = element.getAttribute('imh-appear') || this.defaultAnimation;
        this.duration = parseInt(element.getAttribute('imh-duration')) || this.defaultDuration;
        this.easing = element.getAttribute('imh-easing') || this.defaultEasing;
        this.delay = parseInt(element.getAttribute('imh-delay')) || this.defaultDelay;
        this.translateX = parseInt(element.getAttribute('imh-tx')) || this.defaultTx;
        this.translateY = parseInt(element.getAttribute('imh-ty')) || this.defaultTy;
    
        // array of all animation types & easing types
        this.typesOfAppearanceArray = ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft','fadeInRight','growFromLeft','growFromRight','growFromTop','growFromBottom'];
        this.typesOfEasingArray = ['easeIn','easeInOut','easeNone','easeOut'];
    }

    // check if the element is visible
    checkVisibility(winHeight){
        // get the distance between the top of the element and the top of the window
        this.topRect = this.$imhere.getBoundingClientRect().top;
        this.top = this.topRect + this.offset;

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

        // watch if the element is visible
        if(!this.animated){
            if(this.top < winHeight){
                this.$imhere.classList.add('yesImHere');
                
                // creation of animationsList instance
                this.animations = new AnimationsList(this.options);
                this.animated = true;
                return;
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