class FP {
  constructor(first, last, houseMembers, houseSize, foodChoices, foodSource, waterConsump, purchases) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoices = foodChoices;
    this.foodSource = foodSource;
    this.waterConsumPts = waterConsump;
    this.purchasesPts = purchases;
    this.calHouseHoldPts();
    this.calHouseSizePts();
    this.calFoodChoicesPts();
    this.calFoodSourcePts();
    this.calTotal();
    
  }
  calHouseHoldPts() {
    if (this.houseMembers === 1) {
      this.houseHoldPts = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPts = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPts = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPts = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPts = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPts = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPts = 2;
    }
  }
  calHouseSizePts() {
    if (this.houseSize === "large") {
      this.houseSizePts = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePts = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePts = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePts = 2;
    }
  }
  calFoodChoicesPts() {
    if (this.foodChoices === "domesticDaily") {
      this.foodChoicesPts = 10;
    } else if (this.foodChoices === "domesticFew") {
      this.foodChoicesPts = 8;
    } else if (this.foodChoices === "vegetarian") {
      this.foodChoicesPts = 4;
    } else if (this.foodChoices === "vegan") {
      this.foodChoicesPts = 2;
    }
  }
  calFoodSourcePts() {
    if (this.foodSource === "packed") {
      this.foodSourcePts = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePts = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePts = 2;
    }
  }

  calTotal() {
    this.total =
      this.houseHoldPts +
      this.houseSizePts +
      this.foodChoicesPts +
      this.foodChoicesPts +
      this.waterConsumPts +
      this.purchasesPts;
  }
}

export {FP}