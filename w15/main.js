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

function thing1 (callback) {
  callback()
}
function thing2 (callback) {
  callback()
}
function thing3 (callback) {
  callback()
}

thing1(() => {
  thing2(() => {
    thing3()
  })
})

// function thing1() {
//   // call pizza shop
// }
// function thing2() {
//   // order the pizza
// }
// function thing3() {
//   // eat the pizza
// }


// window.addEventListener('click', callback)
// function callback() {
//   console.log('Clicked')
// }


// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza) {
//   console.log (`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log((`Call Friend`))


// let pizza
// function orderPizza() {
//   console.log('Order pizza')
//   setTimeout(() => {
//     pizza = `🍕`
//     console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log('Pizza was ordered')
// }
// orderPizza()
// console.log('call friend')
// console.log(`Eat ${pizza}`)





// function getPizza() {
//   return '🍕'
// }
// const pizza = getPizza()
// console.log(`${pizza}`)


