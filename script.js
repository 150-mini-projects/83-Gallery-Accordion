const items = document.querySelectorAll(".item");

let imageURLs = [
  "cat-1.png",
  "cat-2.png",
  "cat-3.png",
  "cat-4.png",
  "cat-5.png",
  "cat-6.png",
];

let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "9";
  });

  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1";
  });
});
