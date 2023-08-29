let flag = 0;


function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  console.log(slides);
  slides[num].style.display = "block";
}
slideshow(flag);

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}
// Loader
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;
let isLoading = false;

function showSlide(index) {
  slides[currentSlideIndex].style.display = "none";
  slides[index].style.display = "block";
  currentSlideIndex = index;
}

function showLoader() {
  const loader = slides[currentSlideIndex].querySelector(".loader");
  loader.style.display = "block";
  isLoading = true;
}

function hideLoader() {
  const loader = slides[currentSlideIndex].querySelector(".loader");
  loader.style.display = "none";
  isLoading = false;
}

function controller(change) {
  if (isLoading) {
    return;
  }

  const newIndex = currentSlideIndex + change;
  if (newIndex >= 0 && newIndex < slides.length) {
    showLoader();
    setTimeout(() => {
      showSlide(newIndex);
      hideLoader();
    }, 1000);
  }
}

function loadImage(index) {
  showLoader();
  setTimeout(() => {
    showSlide(index);
    hideLoader();
  }, 1000);
}


document.addEventListener("DOMContentLoaded", () => {
  if (currentSlideIndex == 0) {
    showLoader();
    setTimeout(() => {
      showSlide(currentSlideIndex);
      hideLoader();
    }, 1000);
  } else {
    showSlide(currentSlideIndex);
  }
});


document.querySelector(".prev").addEventListener("click", () => {
  if (!isLoading) {
    loadImage(currentSlideIndex - 1);
  }
});

document.querySelector(".next").addEventListener("click", () => {
  if (!isLoading) {
    loadImage(currentSlideIndex + 1);
  }
});

function controller(change) {
  if (isLoading) {
    return;
  }

  let newIndex = currentSlideIndex + change;
  if (newIndex >= slides.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  showLoader();
  setTimeout(() => {
    showSlide(newIndex);
    hideLoader();
  }, 1000);
}


function changeBpColor(part, color) {


  const BodyPart_first = document.getElementById("BodyPart_first");
  BodyPart_first.src = `./images/angle-1/${part}/${color}.png`;
  const displayBodypart_angle2 = document.getElementById('BodyPart-second');
  displayBodypart_angle2.src = `./images/angle-2/${part}/${color}.png`;
  const displayBodypart_angle3 = document.getElementById('BodyPart_third');
  displayBodypart_angle3.src = `./images/angle-3/${part}/${color}.png`;
  const displayBodypart_angle4 = document.getElementById('BodyPart_fourth');
  displayBodypart_angle4.src = `./images/angle-4/${part}/${color}.png`;
  const displayBodypart_angle5 = document.getElementById('BodyPart_fifth');
  displayBodypart_angle5.src = `./images/angle-5/${part}/${color}.png`;
}
function changeGrillColor(color) {
  const displayGrillColor = document.getElementById("Grill_part");
  displayGrillColor.src = `./images/angle-1/grill/${color}.png`;
  const displayGrillColor_angle5 = document.getElementById("Grill_part5");
  displayGrillColor_angle5.src = `./images/angle-5/grill/${color}.png`;

}
function changeFrontBumper(color) {
  const displayFrontbmpColor = document.getElementById("Frontbmp_angle1");
  displayFrontbmpColor.src = `./images/angle-1/front_bumper/${color}.png`;
  const displayFrontBmp_angle2 = document.getElementById("Frontbmp_angle2");
  displayFrontBmp_angle2.src = `./images/angle-2/front_bumper/${color}.png`;
  const displayFrontBmp_angle3 = document.getElementById("Frontbmp_angle3");
  displayFrontBmp_angle3.src = `./images/angle-3/front_bumper/${color}.png`;
  const displayFrontBmp_angle4 = document.getElementById("Frontbmp_angle4");
  displayFrontBmp_angle4.src = `./images/angle-4/front_bumper/${color}.png`;
  const displayFrontBmp_angle5 = document.getElementById("Frontbmp_angle5");
  displayFrontBmp_angle5.src = `./images/angle-5/front_bumper/${color}.png`;
}
function changeRimsColor(color) {
  const displayRimsColor = document.getElementById("rims_part");
  displayRimsColor.src = `./images/angle-1/rims/${color}.png`;
  const displayRimsColor_angle2 = document.getElementById("rims_part2");
  displayRimsColor_angle2.src = `./images/angle-2/rims/${color}.png`;
  const displayRimsColor_angle3 = document.getElementById("rims_part3");
  displayRimsColor_angle3.src = `./images/angle-3/rims/${color}.png`;
  const displayRimsColor_angle5 = document.getElementById("rims_part5");
  displayRimsColor_angle5.src = `./images/angle-5/rims/${color}.png`;
}
function changeSeatsColor(color) {
  const displaySeatsColor = document.getElementById("seats_part");
  displaySeatsColor.src = `./images/angle-1/seats/${color}.png`;
  const displaySeatsColor_angle2 = document.getElementById("seats_part2");
  displaySeatsColor_angle2.src = `./images/angle-2/seats/${color}.png`;
  const displaySeatsColor_angle3 = document.getElementById("seats_part3");
  displaySeatsColor_angle3.src = `./images/angle-3/seats/${color}.png`;
  const displaySeatsColor_angle4 = document.getElementById("seats_part4");
  displaySeatsColor_angle4.src = `./images/angle-4/seats/${color}.png`;
  const displaySeatsColor_angle5 = document.getElementById("seats_part5");
  displaySeatsColor_angle5.src = `./images/angle-5/seats/${color}.png`;
}
function changeRollBarColor(color) {
  const displayRollBarColor = document.getElementById('rollbar_part');
  displayRollBarColor.src = `./images/angle-1/rollbar/${color}.png`;
  const displayRollBarColor_angle2 = document.getElementById("rollbar_part2");
  displayRollBarColor_angle2.src = `./images/angle-2/rollbar/${color}.png`;
  const displayRollBarColor_angle3 = document.getElementById("rollbar_part3");
  displayRollBarColor_angle3.src = `./images/angle-3/rollbar/${color}.png`;
  const displayRollBarColor_angle4 = document.getElementById("rollbar_part4");
  displayRollBarColor_angle4.src = `./images/angle-4/rollbar/${color}.png`;
  const displayRollBarColor_angle5 = document.getElementById("rollbar_part5");
  displayRollBarColor_angle5.src = `./images/angle-5/rollbar/${color}.png`;
}
function changeTopsColor(color) {
  const displayTopsColor = document.getElementById('tops_part');
  displayTopsColor.src = `./images/angle-1/tops/${color}.png`;
  const displayTopsColor_angle2 = document.getElementById("tops_part2");
  displayTopsColor_angle2.src = `./images/angle-2/tops/${color}.png`;
  const displayTopsColor_angle3 = document.getElementById("tops_part3");
  displayTopsColor_angle3.src = `./images/angle-3/tops/${color}.png`;
  const displayTopsColor_angle4 = document.getElementById("tops_part4");
  displayTopsColor_angle4.src = `./images/angle-4/tops/${color}.png`;
  const displayTopsColor_angle5 = document.getElementById("tops_part5");
  displayTopsColor_angle5.src = `./images/angle-5/tops/${color}.png`;
}
function changeBackBumper(color) {
  const displayBackBumper = document.getElementById("Back_bumper2");
  displayBackBumper.src = `./images/angle-2/back bumper/${color}.png`;
  const displayBackBumper_angle3 = document.getElementById("Back_bumper3");
  displayBackBumper_angle3.src = `./images/angle-3/back bumper/${color}.png`;

  const displayBackBumper_angle4 = document.getElementById("Back_bumper4");
  displayBackBumper_angle4.src = `./images/angle-4/back bumper/${color}.png`;
}

// Calcultae
const price1 = document.getElementById("price1");
const additionalOption1 = document.getElementById("additional-option-1");
const additionalOption2 = document.getElementById('additional-option-2');
const additionalOption3 = document.getElementById("additional-option-3");
const additionalOption4 = document.getElementById("additional-option-4");
const wheel = document.getElementById("Wheel");
const STEREO = document.getElementById('STEREO');
const CHARGER = document.getElementById('CHARGER');
const WEATHER = document.getElementById('WEATHER');
const additionalOption1Price = 495;
const additionalOption2Price = 500;
const additionalOption3Price = 995;
const additionalOption4Price = 750;

additionalOption1.addEventListener("click", () => {
  if (wheel.checked) {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) - additionalOption1Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  } else {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) + additionalOption1Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  wheel.checked = !wheel.checked;
});

additionalOption2.addEventListener('click', () => {
  if (STEREO.checked) {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) - additionalOption2Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  } else {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) + additionalOption2Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  STEREO.checked = !STEREO.checked;

})
additionalOption3.addEventListener('click', () => {
  if (CHARGER.checked) {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) - additionalOption3Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  } else {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) + additionalOption3Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  CHARGER.checked = !CHARGER.checked;
})
additionalOption4.addEventListener('click', () => {
  if (WEATHER.checked) {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) - additionalOption4Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  } else {
    let price1Value = price1.innerText.replace("$", "").replace(",", "");
    let newValue = parseFloat(price1Value) + additionalOption4Price;
    price1.innerText = "$" + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  WEATHER.checked = !WEATHER.checked;

})

// Form




const form = document.getElementById('AddCart');
const formCard = document.getElementById('form_card');
form.addEventListener('click', () =>{
   formCard.style.display = 'block';
})
const close_window = document.getElementById('close_window');
close_window.addEventListener('click', () =>{
  formCard.style.display ='none';
})