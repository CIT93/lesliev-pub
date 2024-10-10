import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbon.js";
import {FORM} from "./global.js"
import {cfpData, saveLS, getLS} from "./storage.js"

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

renderTbl(cfpData)

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
})

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNameIsValid = document.getElementById('lastName').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
      alert('Proceed with form');
  }
})