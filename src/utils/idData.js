const idData = async (id) => {
  const corsAPI = `https://cors-anywhere.herokuapp.com/`;
  const API = `https://jobs.github.com/positions/${id}.json`;
  try {
    const res = await fetch(`${corsAPI}${API}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    const err = new Error(error);
    console.log(err);
  }
};

export default idData;
