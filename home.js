function displayContent(button) {
  // Get the innerHTML content of the clicked button
  var classn = button.querySelector(".class-n").innerHTML;
  var div = button.querySelector(".div").innerHTML;
  var subject = button.querySelector(".subject-n").innerHTML;

  // Store the content in sessionStorage to pass it to another page
  sessionStorage.setItem("class-n", classn);
  sessionStorage.setItem("div", div);
  sessionStorage.setItem("sub", subject);

  // Redirect to another page

  window.top.location.href = "mark_attendance.html";
}

// Home JS
let count = 100;
let sum =75;
let percent = (sum / count) * 100;
let number = document.getElementById("lec1-score");
let counter = 0;
setInterval(() => {
  if (counter == percent) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 20);

// Get the circle element
// var circle = document.querySelector("circle");

// Define the new value for stroke-dashoffset
var num = "0." + percent;
if (percent == 100) {
  var newDashOffset = 0;
} else if (percent < 10) {
  var num = "0.0" + percent;
  var newDashOffset = 252 - 252 * num;
} else {
  var newDashOffset = 252 - 252 * num;
}

var newKeyframes = `@keyframes anim {
    100% {
      stroke-dashoffset: ${newDashOffset};
    }
  }`;

var style = document.createElement("style");
style.textContent = newKeyframes;
document.head.appendChild(style);

function drp() {
  var menubtn = document.querySelector(".menulist");
  var currentDisplayStyle = menubtn.style.display;

  if (currentDisplayStyle === "flex") {
    menubtn.style.display = "none"; // Hide the menu
  } else {
    menubtn.style.display = "flex"; // Show the menu
  }
}
