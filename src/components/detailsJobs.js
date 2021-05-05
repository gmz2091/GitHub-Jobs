import getHash from "../routes/getPath.routes";
import idData from "../utils/idData";
import view from "../view/detailsJobs.html";
const DetailsJobs = async () => {
  const div = document.createElement("div");
  div.classList = "w-10/12 md:w-1/2 m-auto dark:text-gray-300";
  div.innerHTML = await InformationData();

  return div;
};

export default DetailsJobs;

const InformationData = async () => {
  const id = getHash();
  const data = await idData(id);
  const view = ` 
  <div class="text-4xl flex flex-nowrap items-center"><h1>${data.title}</h1> 
    <div class="text-gray-500 border border-gray-900 text-xs font-bold rounded w-16 h-6 flex items-center ml-8">
      <p class="m-auto">${data.type}</p>
    </div>  
  </div>
  <div class=""> ${data.description} </div>
  
  
  `;
  return view;
};
