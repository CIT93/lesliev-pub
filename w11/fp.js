class FP {
    constructor(first, last, houseMembers, houseSize) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.houseHoldPts();
        this.houseSizePts();
        this.total();
    }
    houseHoldPts() {
        if (this.houseMembers === 1) {
            this.houseHoldPts = 14;
          } else if (this.houseMembers  === 2) {
            this.houseHoldPts = 12;
          } else if (this.houseMembers  === 3) {
            this.houseHoldPts = 10;
          } else if (this.houseMembers  === 4) {
            this.houseHoldPts = 8;
          } else if (this.houseMembers  === 5) {
            this.houseHoldPts = 6;
          } else if (this.houseMembers  === 6) {
            this.houseHoldPts = 4;
          } else if (this.houseMembers > 6) {
            this.houseHoldPts = 2;
          }
    }
    houseSizePts() {
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
    total() {
        this.total = this.houseHoldPts + this.houseSizePts
    }
}

export {FP}