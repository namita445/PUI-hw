gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


ScrollTrigger.defaults({scroller: ".casestudies"});

gsap.utils.toArray('.studycover').forEach(image => {
    gsap.set(image, {
        opacity: 0
    })
    gsap.to(image, {
        opacity: 0,
        duration: 2,
        y : 0,
        scrollTrigger:{
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            markers: true,
            onUpdate: self => {
                const direction = self.direction;
                if (direction === -1) {
                    // Scroll is going up
                    gsap.to(image, {
                        y: 50,
                        opacity: 1,
                        duration: 1
                    });
                } else {
                    // Scroll is going down
                    gsap.to(image, {
                        opacity: 1,
                        y: -80,
                        duration: 1
                    });
                }
            }
        }, 
    });
});
