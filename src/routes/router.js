import Home from "../components";
import DetailsJobs from "../components/detailsJobs";
import getHash from "./getPath.routes";
import resolveRoutes from "./resolve.routes";

const Routes = async () => {
  const routes = {
    "/": Home(),
    "/:id": DetailsJobs(),
  };

  const main = null || document.getElementById("main");
  main.innerHTML = "";
  const pathname = getHash();
  const route = await resolveRoutes(pathname);
  const render = routes[route] ? routes[route] : console.log("Not Found");
  main.appendChild(await render);
  
};

export default Routes;

