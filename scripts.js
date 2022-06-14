let constrain = 50;
let mouseOverContainer = document.getElementById("page-container");
let ex1Layer = document.getElementById("ex1-layer");
let ex2Layer = document.getElementById("ex2-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / (constrain * 3);
  let calcY = (x - box.x - box.width / 2) / (constrain * 8);

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) " +
    " skew(20deg, -45deg)"
  );
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);
  let position2 = xy.concat([ex2Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
    transformElement(ex2Layer, position2);
  });
};

mouseOverContainer.onmouseleave = function (e) {
  ex1Layer.style.transform = null;
  ex1Layer.classList.add("reset");
  ex2Layer.style.transform = null;
  ex2Layer.classList.add("reset");
};

mouseOverContainer.onmouseenter = function(e) {
  ex1Layer.classList.remove("reset");
  ex2Layer.classList.remove("reset");
}