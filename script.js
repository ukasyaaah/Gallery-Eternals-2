const cont = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

cont.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    console.log(e.target.getAttribute("src"));

    jumbo.setAttribute("src", `${e.target.getAttribute("src")}`);
    jumbo.classList.add("fade");

    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 100);

    thumbs.forEach((thumb) => {
      thumb.className = "thumb";
    });
    
    e.target.classList.add("active");
  }
});
