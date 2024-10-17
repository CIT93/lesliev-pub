const determineHouseSizePts = function(houseSize) {
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
  
  
  const determineHouseHoldPts = function(numberInHousehold) {
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

  export {determineHouseSizePts, determineHouseHoldPts}