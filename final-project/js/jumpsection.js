gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

document.getElementById("tinderjump").addEventListener("click", function(){
  const casestudies = document.querySelector(".casestudies");
  casestudies.classList.remove("casestudies");
  const allcontainers = document.querySelectorAll(".container");
  allcontainers.forEach(c => c.classList.remove("container"));
  const background = document.getElementById("background");
    
  // add new classes
  casestudies.classList.add("casestudiesnosnap");
  allcontainers.forEach(c => c.classList.add("containernosnap"));
  background.setAttribute('id', 'backgroundnosnap');

  gsap.to(window, {
    duration: 2,
    scrollTo: "#tinder",
    overwrite: 'auto',
    onComplete: () => {
        //casestudies.classList.remove('casestudiesnosnap');
        //allcontainers.forEach(container => container.classList.remove('containernosnap'));
        background.setAttribute('id', 'background');
        //casestudies.classList.add("casestudies");
        //allcontainers.forEach(c => c.classList.add("container"));
        
    }
  });
});


/*
function scrollToSection(){
    console.log("wakhefa");
    gsap.to(window, {
      scrollTo: "#tinder",
      duration: 2
    });
};

let tinderbutton = document.querySelector("#tinderjump");
tinderbutton.addEventListener('click', scrollToSection());
*/
/*
document.getElementById("tinderjump").addEventListener("click", function(){

  gsap.to(window, {
    duration: 1, 
    scrollTo: "#tinder"
  });

});*/

/*onComplete: () => {
    document.querySelectorAll(".casestudies").classList.remove('disabled');
    document.querySelectorAll(".container").classList.remove('disabled');
    console.log("testing");
  }*/

/*
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: "#tinder",
      offsetY: 100 
    }
  });
});*/