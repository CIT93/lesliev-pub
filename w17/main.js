import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts, determineFoodChoicesPts } from "./carbon.js";
import {FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
import {cfpData, saveLS} from "./storage.js";
import{FP} from "./fp.js";

const start = (houseMembers, houseSize, first, last, foodChoices) => {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const foodChoicesPTS = determineFoodChoicesPts(foodChoices);
  const total = houseHoldPTS + houseSizePTS + foodChoicesPTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseMembers,
    houseS: houseSize,
    foodChoice: foodChoices,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodC: foodChoicesPTS,
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

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.food.checked,
    recyclePts: (24 - (numberChecked * 4))
  }
}


FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  //const recycleObj = determineRecycleItems(e);
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodc.value,
      e.target.foodSource.value,
      parseInt(e.target.waterConsump.value),
      e.target.both.checked ? parseInt(e.target.waterConsump.value) * 2 : parseInt(e.target.waterConsump.value),
      e.target.both.checked,
      parseInt(e.target.purchases.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.vehicle.value),
      parseInt(e.target.transport.value),
      parseInt(e.target.flights.value)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false;
  } else {
    SUBMIT.textContent = "Form requires first & last name";
  }
});

WATER.addEventListener("change", e=> {
  if(parseInt(WATER.value) === 0){
    BOTH.disabled = true;
  } else {
    BOTH.disabled = false;
  }
})