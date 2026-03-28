(function (window, document) {
  "use strict";

  function handleScrollShadow(tableWrapper, scrollTarget) {
    if (!tableWrapper || !scrollTarget) return;

    const margin = 16;
    const scrollShadowLeftClass = "scroll-shadow-left";
    const scrollShadowRightClass = "scroll-shadow-right";

    if (scrollTarget.scrollLeft > margin) {
      tableWrapper.classList.add(scrollShadowLeftClass);
    } else {
      tableWrapper.classList.remove(scrollShadowLeftClass);
    }

    if (
      scrollTarget.scrollLeft + scrollTarget.offsetWidth + margin <
      scrollTarget.scrollWidth
    ) {
      tableWrapper.classList.add(scrollShadowRightClass);
    } else {
      tableWrapper.classList.remove(scrollShadowRightClass);
    }
  }

  function setupTableScrollShadows() {
    const tableScrollWrapperName = "table-scroll-wrapper";
    const tableWrapper = document.querySelectorAll(".table-wrapper");

    for (const ele of tableWrapper) {
      handleScrollShadow(ele, ele.querySelector(`.${tableScrollWrapperName}`));
    }

    document.addEventListener(
      "scroll",
      (event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.classList.contains(tableScrollWrapperName)
        ) {
          for (const ele of tableWrapper) {
            if (ele.firstElementChild === event.target) {
              handleScrollShadow(ele, event.target);
              break;
            }
          }
        }
      },
      true,
    );
  }

  document.addEventListener("DOMContentLoaded", setupTableScrollShadows);
})(window, document);
