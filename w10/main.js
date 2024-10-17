import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbon.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {cfpData, saveLS} from "./storage.js"


const start = (numberInHousehold, houseSize, firstname, lastname) => {
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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
} else {
  SUBMIT.textContent = "Form requires first & last name";
}
  
})

//rest operator

// const add2 = function(x, ...a) { 
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

// arr

// arrow function
const add2 = a => 2 + a;


const result = add2(100);

//spread argument

// IIFE

//const a = 3;

(function(a){
  console.log("inside IIFE")
  console.log(a)
})();