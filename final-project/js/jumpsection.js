gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function removeSnap(){
  //removes CSS Scroll Snapping
  const casestudies = document.querySelector(".casestudies");
  casestudies.classList.remove("casestudies");
  const allcontainers = document.querySelectorAll(".container");
  allcontainers.forEach(c => c.classList.remove("container"));
  
  casestudies.classList.add("casestudiesnosnap");
  allcontainers.forEach(c => c.classList.add("containernosnap"));
  const background = document.getElementById("background");
  background.setAttribute('id', 'backgroundnosnap');
}

function scrollToSection(tagName){
  removeSnap();

  gsap.utils.toArray('.studycover').forEach(image => {
    gsap.set(image, {
        opacity: 1
    })
  });

  gsap.to(window, {
    duration: 1,
    scrollTo: tagName,
    overwrite: 'auto',
    onComplete: () => {
        //casestudies.classList.remove('casestudiesnosnap');
        //allcontainers.forEach(container => container.classList.remove('containernosnap'));
        //background.setAttribute('id', 'background');
        //casestudies.classList.add("casestudies");
        //allcontainers.forEach(c => c.classList.add("container"));
    }
  });
};

document.getElementById("tinderjump").addEventListener("click", function() {scrollToSection("#tinder")});
document.getElementById("rimsysjump").addEventListener("click", function() {scrollToSection("#rimsys")});
document.getElementById("homejump").addEventListener("click", function() {scrollToSection("#hhelper")});
document.getElementById("spinjump").addEventListener("click", function() {scrollToSection("#spin")});
