// var tl = gsap.timeline();
// splitTheTextsIntoCharcters();

// function splitTheTextsIntoCharcters() {
//   document.querySelectorAll("#texts h1").forEach(function (texts) {
//     clutter = "";
//     var text = texts.textContent.trim().split("");
//     text.forEach(function (char) {
//       clutter += `<span>${char}</span>`;
//     });
//     texts.innerHTML = clutter;
//   });
// }

tl.from(
  ".nav-sec a",
  {
    y: 20,
    opacity: -1,
    stagger: 0.1,
    duration: 2,
    ease: Expo,
  },
  
)

  .from(
    "#ncentre",
    {
      y: 20,
      opacity: -1,
      duration: 1,
      ease: Expo,
    },
    
  )

  .from("#texts h1 span", {
    opacity: 0,
    color: "red",
    scale: 100,
    stagger: 0.07,
    duration: 0.1,
    ease: Expo,
  });

(function page2Gsap() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "top 50%",
      scrub: 4,
      duration: 1,
      opacity: 0,
    },
  });

  tl2
    .to(
      "#runTxt h2",
      {
        x: -500,
        ease: Circ,
      },
      "j"
    )

    .to(
      ".pics",
      {
        scrollTrigger: {
          trigger: "#page2",
          start: "top 50%",
          scrub: 4,
          duration: 1,
        },
        x: -900,
      },
      "j"
    );
})();

function page3() {
  document.querySelector("#page3").addEventListener("click", function (dets) {
    // console.log(cross);
    if (isNaN(dets.target.id)) {
      console.log(dets);

      var klose = document.querySelectorAll("#close-1");

      // klose.forEach(function(crr){
      //     console.log(  "strcnt" + crr.id.split("-")[1])
      // })

      gsap.to(dets.target.offsetParent, {
        width: 4 + "%",
      });
      gsap.to(dets.path[1].children[2], {
        opacity: 0,
      });

      var cross = document.querySelectorAll("#close-1");

      // var jedu= cross.forEach(function (crss) {
      //     crss.id.split("-")[1];
      // })

      // console.log(jedu);

      // gsap.to(dets.target.id.split("-"))
    } else {
      var wset = 100 - (4 - dets.target.id) * 4;
      var strcnt = document.querySelectorAll(".strcnt");
      // console.log(strcnt);

      var close = document.querySelectorAll(".close");

      gsap.to(dets.target, {
        width: wset + "%",
        ease: Circ,
      });

      gsap.to(strcnt[dets.target.id - 1], {
        opacity: 1,
        delay: 0.4555,
        ease: Circ,
      });
    }
  });
}
page3();

function page4gsap() {
  var hoversec = document.querySelectorAll(".texts");

  hoversec.forEach(function (dets) {
    dets.addEventListener("mousemove", function (move) {
      dets.children[1].style.opacity = "1";
      dets.children[1].style.transform = `translate(${
        move.screenX * 0.4
      }px, 0%) rotate(${move.screenX * 0.05}deg)`;
    });

    dets.addEventListener("mouseleave", function (move) {
      dets.children[1].style.opacity = "0";
    });
  });
}
page4gsap();
