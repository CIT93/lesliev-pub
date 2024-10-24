import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts, determineFoodChoicesPts } from "./carbon.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
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

// const start = (...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[2]);
//   const houseSizePTS = determineHouseSizePts(i[3]);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: i[0],
//     lastName: i[1],
//     houseM: i[2],
//     houseS: i[3],
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total
//   });

// }

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
    //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value);
    //fpObj.houseHoldPts();
    //fpObj.houseSizePts();
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
} else {
  SUBMIT.textContent = "Form requires first & last name";
}
  
})

// const me = {
//   name: "Leslie",
//   hairColour: "Red",
//   location: "Home",
//   sleepScore: 70,
//   introduce: function() {
//     console.log (this)
//     console.log(`This is ${this.name} with ${this.hairColour} hair colour is in ${this.location} right now`)
//   }
// }

// const you = {
//   name: "Nayeon",
//   hairColour: "Brown",
//   location: "Work",
//   sleepScore: 95,
//   introduce: function() {
//     console.log (this)
//     console.log(`This is ${this.name} with ${this.hairColour} hair colour is in ${this.location} right now`)
//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColour, location, sleepScore){
//     this.name = name 
//     this.hairColour = hairColour
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColour} hair colour is in ${this.location} right now and has a sleep score of ${this.sleepScore}`)
//   }
// }

// const leslie = new Human("Leslie", "Red", "Home", 70);
// const nayeon = new Human("Nayeon", "Brown", "Work", 95);
// leslie.introduce();
// nayeon.introduce();
// leslie.hrv = 50;