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
  renderTbl(cfpData);
  FORM.reset();


})
