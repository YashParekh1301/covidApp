async function getCovidData () {
  try {
    const covidData = await fetch("https://api.covid19api.com/summary");
    return covidData;
    // return dummyData
  }
  catch (err) {
    console.log("fetch covid error", err);
  }
}

let timeout;
var debounce = function(func, delay) {
  clearTimeout(timeout);

  timeout = setTimeout(func, delay);
};

const sort = (list, id, order) => {
  let sortedList = [];
  if(order === "ASC") {
    sortedList = (list || []).sort((a,b) => a[`${id}`] > b[`${id}`] ? 1 : -1);
  }
  else {
    sortedList = (list || []).sort((a,b) => a[`${id}`] > b[`${id}`] ? -1 : 1);
  }
  return sortedList;
}

export {
  getCovidData,
  debounce,
  sort
}