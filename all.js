import GScroll from "https://cdn.skypack.dev/@grcmichael/gscroll";


gsap.registerPlugin(ScrollTrigger);

const scroll = new GScroll(
    '#tinderjump',
    0.6,
    () => {ScrollTrigger.update()}
);

scroll.init();

const scroller = document.getElementById('tinderjump')
    ScrollTrigger.defaults({
    scroller: scroller
})

ScrollTrigger.defaults({ scroller: ".casestudies" });

gsap.utils.toArray('.studycover').forEach(image => {
    gsap.to(image, {
        opacity: 0,
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
                        y: -80,
                        opacity: 1,
                        duration: 1
                    });
                }
            },
            onToggle: self => {
                if (self.direction === 1) {
                    gsap.to(image, {
                        opacity: 1
                    });
                }
            }
        }, 
    });
});
/*
document.querySelector("#tinderjump").addEventListener("click", e => {
    smoother.scrollTo("#tinder", true, "center center");
    
    // or you could animate the scrollTop:
    // gsap.to(smoother, {
    // 	scrollTop: smoother.offset(".box-c", "center center"),
    // 	duration: 1
    // });
  });
  */
