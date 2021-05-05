import "tailwindcss/tailwind.css";
import Routes from "./routes/router";

const App = () => {
  Routes(window.location.hash);
  window.addEventListener("hashchange", () => {
    Routes(window.location.hash);
  });
  
  if (localStorage.theme === "dark" || "theme" in localStorage) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

window.addEventListener("load", App);
