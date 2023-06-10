class ScrollAnimation {

    constructor(options = {}) {  

        this.options = Object.assign(this, {
            root: document,
            rootMargin: '0px',
            threshold: 0.5
        }, options);
	
        this.observer = new IntersectionObserver(this.onChange, this.options);
    }
	
    observeAll() {
         let images = document.querySelectorAll('[data-class-in]');
         images.forEach(img => this.observer.observe(img));
    }
	
    unobserveAll() {
        let images = document.querySelectorAll('[data-class-in]');
        images.forEach(img => this.observer.unobserve(img));
    }

    onChange(changes, observer) {
        changes.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add(...change.target.getAttribute('data-class-in').split(' '))
            }
        })
    }
}

export default ScrollAnimation;