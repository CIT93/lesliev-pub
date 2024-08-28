function determineHouseHoldPts(numberInHousehold) {
  console.log("inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(
    `based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;

//global scope

determineHouseHoldPts(3);
determineHouseHoldPts(4);

function determineHouseSizePts(houseSize) {
    if (houseSize === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "medium") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`based on the my house size, ${houseSize}, the new carbon FP total would be ${carbonFootprintPoints}.`);
}

determineHouseSizePts("medium")
