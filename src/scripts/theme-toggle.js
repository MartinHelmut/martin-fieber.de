(function () {
  "use strict";

  const lightThemeName = "light-theme";
  const darkThemeName = "dark-theme";
  const btnTarget = document.querySelector("main + footer");

  if (!btnTarget) return;

  const setThemeBasedProps = (ele, theme) => {
    const isDark = theme === darkThemeName;
    ele.textContent = isDark ? "Lights on" : "Lights off";
    ele.title = isDark
      ? "Switch to a light theme (Shift+T)."
      : "Switch to a dark theme (Shift+T).";
  };

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const osSetting = prefersDarkScheme.matches ? darkThemeName : lightThemeName;
  const currentTheme = localStorage.getItem("theme") || osSetting;

  const btn = document.createElement("button");
  btn.classList.add("theme-toggle");
  setThemeBasedProps(btn, currentTheme);
  btnTarget.appendChild(btn);

  document.body.classList.toggle(currentTheme);

  const toggleTheme = () => {
    document.body.classList.toggle(darkThemeName);
    document.body.classList.toggle(lightThemeName);

    const theme = document.body.classList.contains(darkThemeName)
      ? darkThemeName
      : lightThemeName;

    setThemeBasedProps(btn, theme);
    localStorage.setItem("theme", theme);
  };

  btn.addEventListener("click", toggleTheme);

  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key === "T") {
      toggleTheme();
    }
  });
})();
