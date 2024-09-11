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



console.log("global scope")

function displayOutObj(obj) {
  console.log(obj)
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footpring ${obj.cfpTotal}`;
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`
  const newP = document.createElement("p");
  newP.textContent = `Number is based on the number of people in a house of  ${obj.houseM} (score:${obj.houseMPTS}) and a(n) ${obj.houseS}  sized home (score:${obj.houseSPTS}).`;
  output.appendChild(newH2);
  output.appendChild(newH3);
  output.appendChild(newP);
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
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
     newH2.textContent = `Carbon Footpring ${obj.cfpTotal}`;
    /*const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `Number is based on the number of people in a house of  ${arr[0]} (score:${arr[3]}) and a(n) ${arr[1]}  sized home (score:${arr[2]}).`;*/
    output.appendChild(newH2);
    // output.appendChild(newH3);
    // output.appendChild(newP); 
  }
}
 

start(5, "medium");
start(4, "large");
start(4, "small");
start(3, "apartment");
start(2, "apartment");
start(4, "apartment");
start(5, "apartment");
start(6, "apartment");
start(1, "apartment");
start(1, "large");
start(2, "large");
start(3, "large");
start(5, "large");
start(6, "large");
start(1, "medium");
start(2, "medium");
start(3, "medium");
start(4, "medium");
start(6, "medium");
start(1, "small");
start(2, "small");
start(3, "small");
start(5, "small");
start(6, "small"); 

displayOutput()

