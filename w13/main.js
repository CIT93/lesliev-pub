const FORM = document.getElementById("form");
const output = document.getElementById("output");
output.style.textAlign = "center"
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");
const newH3 = document.createElement("h3");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    let exerciseT;
    if (exerciseType === "pull-ups") {
      exerciseT = "pull-ups";
    } else if (exerciseType === "sit-ups") {
      exerciseT = "sit-ups";
    } else if (exerciseType === "lunges") {
      exerciseT = "lunges";
    } else if (exerciseType === "squats") {
        exerciseT = "squats";
    } else if (exerciseType === "planks") {
        exerciseT = "planks";
    }

    const repNumber = parseInt(FORM.repNumber.value);
    const repTime = parseInt(FORM.repTime.value);
    output.innerHTML = "";
    newH1.textContent = `Start ${exerciseType} <> Goal is ${repNumber} reps <>`;
    output.appendChild(newH1);

    new Promise((resolve) => {
      setTimeout(() => {
          newH2.textContent = `It should take ${repTime} Minutes`;
          output.appendChild(newH2);
          resolve();
      }, repTime * 1000);
  })
  .then(() => new Promise((resolve) => {
      setTimeout(() => {
          newH3.textContent = `Stop ${exerciseType}!`;
          output.appendChild(newH3);
          console.log(`Success: ${exerciseType} workout loaded`);
          resolve();
      }, repTime * 5000);
  }))
  .catch((error) => console.error("Could not load workout:", error));

    FORM.reset();
});
