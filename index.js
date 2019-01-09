function updateYear(){
  let newYear = new Date().getFullYear();
    return newYear;
};

let newYear = document.querySelector('#yearMod', updateYear());
newYear.innerHTML = updateYear();
