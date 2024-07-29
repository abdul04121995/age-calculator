const dayEl = document.querySelector("#days");
const monthEl = document.querySelector("#months");
const yearsEl = document.querySelector("#years");
const btnEl = document.querySelector(".calc-btn");
const resetEl = document.querySelector(".reset");
const displayEl = document.querySelector(".displayer");
let divider = 365 * 24 * 60 * 60 * 1000;

function resetFunction() {
  monthEl.value = "";
  dayEl.value = "";
  yearsEl.value = "";
  displayEl.innerHTML = "";
}
function ageCalculator(y, m, d) {
  let ageInYears;
  let yearVal = y.value;
  let monthVal = m.value;
  let dayVal = d.value;
  let dateOfbirth = new Date(yearVal, monthVal - 1, dayVal).getTime();
  let currentDate = new Date().getTime();
  if (
    Number(yearVal) &&
    Number(yearVal) > 1950 &&
    Number(yearVal) < Number(new Date().getFullYear()) &&
    Number(monthVal) &&
    Number(dayVal)
  ) {
    ageInYears = Math.trunc((currentDate - dateOfbirth) / divider);
    displayEl.innerHTML = `<p> your age is ${ageInYears}</p>`;
    console.log(ageInYears);
  } else {
    resetFunction();
    console.log("sorry");
    displayEl.innerHTML = `<p class="alert">please enter correct value</p>`;
    setTimeout(() => {
      displayEl.innerHTML = "";
    }, 1500);
  }
}
btnEl.addEventListener("click", function () {
  ageCalculator(yearsEl, monthEl, dayEl);
});
resetEl.addEventListener("click", function () {
  resetFunction();
});
