const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

console.log("top of file")
function determineHouseSizePts(houseSize) {
  let houseSizePoints = 0;
    if (houseSize === "large") {
        houseSizePoints = 10;
    } else if (houseSize === "medium") {
      houseSizePoints = 7;
    } else if (houseSize === "small") {
      houseSizePoints = 4;
    } else if (houseSize === "apartment") {
      houseSizePoints = 2;
    }
    return houseSizePoints;
}


function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints
}


function start(numberInHousehold, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: numberInHousehold,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });

}


 function displayOutput() {
  for (obj of cfpData){
    console.log(obj)
    const newH2 = document.createElement("h2");
     newH2.textContent = `Carbon Footpring ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home for ${FORM.firstname.value} ${FORM.lastname.value}`
    const newP = document.createElement("p");
    newP.textContent = `Number is based on the number of people in a house of  ${obj.houseM} (score:${obj.houseMPTS}) and a(n) ${obj.houseS}  sized home (score:${obj.houseSPTS}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP); 
  }
}
 

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
})


// at first im messing around with the labels to see if they might be whats going on. i added the limit of 20 characters by editing the html and adding a min of 1 and a max of 20. i messed around with writing the max and it gave me the function maxlength whcih also seems to work without having to have a minimum. i added firstname and lastname to start function and it worked with displaying it in the console. im trying to add it to the obj array but im trying to see how first and last name would work since they are not objs. so i got it to work using ${FORM.firstname.value} ${FORM.lastname.value} instead of labeling them as objects. i have no idea if there are multiple ways to do this but this is what worked for me.
