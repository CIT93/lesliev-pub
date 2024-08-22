
// How to Calculate Your Carbon Footprint

// 1. Number of members in household: 5
const myHousehold = 6
// 2. Size of house: medium
const myHouseSize = 7
// 3. Food choices: 
const myFood = 14
// 4. Water consumption:
const myWater = 4
// 5. Household purchases per year:
const myPurchases = 8
// 6. Waste produced
const myWaste = 40
// 7. Waste recycled
const myrecycling = 16
// 8. Transportation tally
const myTransportation = 12
// 9. Add up points
 const cfpTotal = myHousehold + myHouseSize + myFood + myWater + myPurchases + myWaste + myrecycling + myTransportation
// 10. Write JS to render in HTML with total
const myHeading = document.querySelector("h2");
myHeading.textContent = "107!";