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

function addSnap(){
  //adds CSS Scroll Snapping
  const casestudies = document.querySelector(".casestudiesnosnap");
  casestudies.classList.remove("casestudiesnosnap");
  const allcontainers = document.querySelectorAll(".containernosnap");
  allcontainers.forEach(c => c.classList.remove("containernosnap"));
  
  casestudies.classList.add("casestudies");
  allcontainers.forEach(c => c.classList.add("container"));
  const background = document.getElementById("backgroundnosnap");
  background.setAttribute('id', 'background');
} 


function scrollToSection(tagName){
  removeSnap();

  gsap.utils.toArray('.wrapper').forEach(image => {
    gsap.set(image, {
        opacity: 1
    })
  });

  gsap.to(window, {
    duration: 2,
    scrollTo: tagName,
    overwrite: 'auto',
    onComplete: () => {
      const wrapper = document.querySelector(tagName +  ' .wrapper .buttons');
      const backButton = document.createElement('button');
      backButton.textContent = '⬆️ Back to Top';
      backButton.setAttribute('style', 'font-size: 14px; background-color: black; color:white; text-align:center; width:50%;');
      backButton.addEventListener('click', () => {
        addSnap();
        gsap.to(window, {
          duration: 2,
          scrollTo: "#background",
          overwrite: 'auto'
        });
      });
      wrapper.appendChild(backButton);
    }}
  )
  }
document.getElementById("tinderjump").addEventListener("click", function() {scrollToSection("#tinder")});
document.getElementById("rimsysjump").addEventListener("click", function() {scrollToSection("#rimsys")});
document.getElementById("homejump").addEventListener("click", function() {scrollToSection("#hhelper")});
document.getElementById("spinjump").addEventListener("click", function() {scrollToSection("#spin")});
