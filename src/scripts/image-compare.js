(function () {
  "use strict";

  function createImageCompare(el, color, start) {
    const pictures = el.querySelectorAll("picture");
    const arrows = document.createElement("div");
    const circle = document.createElement("div");
    const arrow = `<svg
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
          <path
            fill="${color}"
            stroke="${color}"
            stroke-linecap="round"
            stroke-width="0"
            d="M4.5 1.9L10 7.65l-5.5 5.4" />
         </svg>`;

    let wrapperImageB = null;
    let active = false;

    circle.classList.add("circle");
    circle.style.borderColor = color;

    arrows.classList.add("theme-wrapper");
    el.innerHTML = "";

    pictures.forEach((picture, index) => {
      el.appendChild(picture);

      picture
        .querySelector("img")
        .classList.add("image", index === 0 ? "image-a" : "image-b");

      if (index === 1) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.style.cssText = `width: ${100 - start}%; height: ${start}%;`;

        wrapper.appendChild(picture);
        el.appendChild(wrapper);

        wrapperImageB = wrapper;
      }

      const arrowWrapper = document.createElement(`div`);
      arrowWrapper.classList.add("arrow-wrapper");
      arrowWrapper.innerHTML += arrow;
      arrows.appendChild(arrowWrapper);
    });

    const control = (function buildControl() {
      const control = document.createElement("div");
      const uiLine = document.createElement("div");

      control.classList.add("control");
      control.style.cssText = `left : calc(${start}% - 25px);`;

      uiLine.classList.add("control-line");
      uiLine.style.cssText = `background: ${color};`;

      const uiLine2 = uiLine.cloneNode(true);

      control.appendChild(uiLine);
      control.appendChild(circle);
      control.appendChild(arrows);
      control.appendChild(uiLine2);

      el.appendChild(control);
      return control;
    })();

    function slideCompare(ev) {
      const bounds = el.getBoundingClientRect();
      const x =
        ev.touches !== undefined
          ? ev.touches[0].clientX - bounds.left
          : ev.clientX - bounds.left;

      const position = (x / bounds.width) * 100;

      if (position >= 0 && position <= 100) {
        control.style.left = `calc(${position}% - 25px)`;
        wrapperImageB.style.width = `calc(${100 - position}%)`;
      }
    }

    (function setupEvents() {
      // Desktop events
      el.addEventListener("mousedown", (ev) => {
        active = true;
        document.body.classList.add("no-user-select");
        window.bodyScrollLock.disableBodyScroll(el, {
          reserveScrollBarGap: true,
        });
        slideCompare(ev);
      });
      el.addEventListener("mousemove", (ev) => active && slideCompare(ev));

      el.addEventListener("mouseup", () => (active = false));
      document.body.addEventListener("mouseup", () => {
        document.body.classList.remove("no-user-select");
        window.bodyScrollLock.enableBodyScroll(el);
        active = false;
      });

      // Mobile events

      control.addEventListener("touchstart", (e) => {
        active = true;
        document.body.classList.add("no-user-select");
        window.bodyScrollLock.disableBodyScroll(el, {
          reserveScrollBarGap: true,
        });
      });

      el.addEventListener("touchmove", (ev) => {
        active && slideCompare(ev);
      });

      el.addEventListener("touchend", () => {
        active = false;
        document.body.classList.remove("no-user-select");
        window.bodyScrollLock.enableBodyScroll(el);
      });
    })();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelectorAll("[data-compare-image]");
    el.forEach((viewer) => {
      const options = viewer.getAttribute("data-compare-image");
      const [color = "white", start = "50"] = options.split(",");
      createImageCompare(viewer, color, parseInt(start, 10));
    });
  });
})();
