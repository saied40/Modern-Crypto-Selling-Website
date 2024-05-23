// ^Make a circle div with blur around the cursor
function animate(e) {
  document.body.style.setProperty('--cursor-top', e.clientY + 'px');
  document.body.style.setProperty('--cursor-left', e.clientX + 'px');
};

// *Check if the screen can be hovering
// if (window.matchMedia('(hover: hover)').matches) {
//   window.addEventListener('mousemove', animate);
// }

const navBtn = document.getElementById("navBtn");
const dropdown = document.querySelector(".dropdown-menu");

navBtn.addEventListener('click', _ => {
  if (dropdown.classList.contains("max-md:top-[-1000%]")) {
    dropdown.classList.remove("max-md:top-[-1000%]");
    dropdown.classList.add("max-md:top-auto");
    navBtn.children[0].src = "./img/x.svg";
  } else {
    dropdown.classList.add("max-md:top-[-1000%]");
    dropdown.classList.remove("max-md:top-auto");
    navBtn.children[0].src = "./img/menu.svg";
  };
});
