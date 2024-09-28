import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbon.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data")
const cfpData = [];

console.log("top of file")



function start(numberInHousehold, houseSize, firstname, lastname) {
  const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstname,
    lastName: lastname,
    houseM: numberInHousehold,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });

}


/*  function displayOutput() {
  for (obj of cfpData){
    console.log(obj)
    const newH2 = document.createElement("h2");
     newH2.textContent = `Carbon Footpring ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number of people and size of home for ${obj.firstName} ${obj.lastName}`
    const newP = document.createElement("p");
    newP.textContent = `Number is based on the number of people in a house of  ${obj.houseM} (score:${obj.houseMPTS}) and a(n) ${obj.houseS}  sized home (score:${obj.houseSPTS}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP); 
  }
} */


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
 /*  displayOutput(); */
  renderTbl(cfpData);
  FORM.reset();


})


// we got an error with the td because its blocked in the function and its not referenced outside

// i think i get the concept of modules. i remember in a previous class i would see multiple js files for certain things and im pretty sure they were modules like this. i remember spec one for a carousel on my website. i think they're pretty helpful in keeping the code clean and putting each item in its own code space.