const getData = async (technology, locationName = "") => {
  const corsAPI = `https://cors-anywhere.herokuapp.com/`;
  const API = `https://jobs.github.com/positions.json?search=${technology}&location=${locationName}`;
  try {
    const res = await fetch(`${corsAPI}${API}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    console.log(API);
    return data;
  } catch (error) {
    const err = new Error(error);
    console.log(err);
  }
};

export default getData;
