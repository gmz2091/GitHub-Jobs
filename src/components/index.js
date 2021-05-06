import view from "../view/index.html";
import getData from "../utils/getData";

const Home = async () => {
  const div = document.createElement("div");
  div.classList = "w-10/12 h-screen flex flex-wrap m-auto";
  div.innerHTML = view;
  const form_search = div.querySelector("#form_search");
  const check = div.querySelector("#check");
  const input_cite = div.querySelector("#input_cite");

  const main = document.getElementById("main");

  check.addEventListener("click", () => {
    const input_check = document.getElementById("input_check");
    if (input_check.checked !== true) {
      input_check.checked = true;
      localStorage.theme = "dark";
      check.classList =
        "toggle-dark-mode cursor-pointer s-relative absolute top-6 right-6";
      return document.documentElement.classList.add("dark");
    } else {
      check.classList =
        "toggle-light-mode cursor-pointer s-relative absolute top-6 right-6";
      input_check.checked = false;
      localStorage.removeItem("theme");
      return document.documentElement.classList.remove("dark");
    }
  });

  if (localStorage.theme === "dark" || "theme" in localStorage) {
    check.classList =
      "toggle-dark-mode cursor-pointer s-relative absolute top-6 right-6";
  } else {
    check.classList =
      "toggle-light-mode cursor-pointer s-relative absolute top-6 right-6";
  }

  form_search.addEventListener("submit", SendData);
  input_cite.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return div;
};

export default Home;

const SendData = async (e) => {
  e.preventDefault();
  const value = document.getElementById("values_city");
  console.log(value);

  value.addEventListener("click", (e) => {
    const locationName = e.target.value;
    const cityNames = cityNameLocation(locationName);
    getJobsData(input_search, cityNames);
  });

  const input_search = document.getElementById("input_search").value;
  if (!(input_search === "")) {
    getJobsData(input_search);
  } else {
    main.appendChild(AlertError("El campo esta Vacio"));
  }
};

const getJobsData = async (job, location) => {
  const jobs_render = document.getElementById("jobs_render");
  form_search.reset();
  const data = await getData(job, location);
  console.log(data);
  const view = `
  ${data
    .map(
      (elements) =>
        ` <div class="bg-white rounded dark:bg-gray-900 shadow p-2 flex flex-nowrap relative mb-8 h-36 md:h-24">
  <div class="w-20 rounded">
    <img
      src="${elements.company_logo}"
      alt="IMG EMPRES"
      class="w-full"
    />
  </div>
  <div class="ml-4 h-20 grid grid-cols-1 place-items-stretch">
  <a href="#/${elements.id}"><p class="text-gray-500 font-bold text-xs">${elements.company}</p></a>    
    <p class="text-gray-800 dark:text-gray-500 text-base md:text-lg font-normal">
      ${elements.title}
    </p>
    <div
      class="text-gray-500 border border-gray-900 text-xs font-bold rounded w-16 h-6 flex items-center"
    >
      <p class="m-auto">${elements.type}</p>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex flex-nowrap text-xs text-gray-400">
    <div class="flex flex-nowrap">
      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
      </svg></span> <p>${elements.location}</p>
    </div>
    <div class="ml-12 flex flex-nowrap">
      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg></span> <p>5 days ago</p>
    </div>
  </div>
</div>  
  `
    )
    .join("")}
  `;
  jobs_render.innerHTML = view;
  return jobs_render;
};

const AlertError = (message) => {
  const div = document.createElement("div");
  if (localStorage.theme === "dark" || "theme" in localStorage) {
    div.classList =
      "px-4 py-4 text-red-700 bg-red-200 rounded w-full sm:w-48 sm:h-14 absolute bottom-4 sm:top-28 sm:left-12 md:left-6 md:top-12 s-shadow-bottom z-50";
  } else {
    div.classList =
      "px-4 py-4 text-red-700 bg-red-200 rounded w-full sm:w-48 sm:h-14 absolute bottom-4 sm:top-28 sm:left-12 md:left-6 md:top-12 shadow-md z-50";
  }
  div.innerHTML = `
    <p>${message}</p>
  `;
  setTimeout(() => {
    div.classList =
      "transition-all transform -translate-x-full opacity-0 px-4 py-4 text-red-700 bg-red-200 rounded w-full sm:w-48 sm:h-14 absolute bottom-4 sm:top-28 sm:left-12 md:left-6 md:top-12 shadow-md z-0";
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 2000);
  return div;
};

const cityNameLocation = (location) => {
  switch (location) {
    case "London":
      return location;
    case "Amsterdan":
      return location;
    case "USA":
      return location;
    case "Berlin":
      return location;

    default:
      break;
  }
};
