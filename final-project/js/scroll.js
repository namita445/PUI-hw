gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


ScrollTrigger.defaults({scroller: ".casestudies"});

gsap.utils.toArray('.wrapper').forEach(image => {
    gsap.set(image, {
        opacity: 0,
        y : 10,
    })
    gsap.to(image, {
        opacity: 0,
        duration: 1.5,
        y : -10,
        scrollTrigger:{
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            //markers: true,
            onUpdate: self => {
                const direction = self.direction;
                if (direction === -1) {
                    // Scroll is going up
                    gsap.to(image, {
                        y: 80,
                        opacity: 0.8,
                        delay: 0.2,
                        duration: 1.5
                    });
                } else {
                    // Scroll is going down
                    gsap.to(image, {
                        opacity: 0.7,
                        y: -80,
                        duration: 1.5
                    });
                }
            }  
    }});
});

const studyCovers = document.querySelectorAll('.studycover');

studyCovers.forEach(studyCover => {
  studyCover.addEventListener('mouseenter', () => {
    gsap.to(studyCover, { 
      scale: 1.1, 
      duration: 0.5 
    });
  });

  studyCover.addEventListener('mouseleave', () => {
    gsap.to(studyCover, { 
      scale: 1, 
      duration: 0.5
    });
  });
});

