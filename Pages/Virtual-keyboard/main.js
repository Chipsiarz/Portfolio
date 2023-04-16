const button = document.getElementsByTagName("button");
const space = document.getElementById("space");
const esc = document.getElementById("esc");
const tab = document.getElementById("tab");
const capsLock = document.getElementById("capsLock");
const enter = document.getElementById("enter");
const backspace = document.getElementById("backspace");
const lShift = document.getElementById("lShift");
const rShift = document.getElementById("rShift");
const lCtrl = document.getElementById("lCtrl");
const rCtrl = document.getElementById("rCtrl");
const lAlt = document.getElementById("lAlt");
const rAlt = document.getElementById("rAlt");
const tilde = document.getElementById("tilde");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const minus = document.getElementById("minus");
const equals = document.getElementById("equals");
const lBracket = document.getElementById("lBracket");
const rBracket = document.getElementById("rBracket");
const backslash = document.getElementById("backslash");
const forwardslash = document.getElementById("forwardslash");
const semicolon = document.getElementById("semicolon");
const quote = document.getElementById("quote");
const comma = document.getElementById("comma");
const dot = document.getElementById("dot");
const displayText = document.getElementById("keyboardTextDisplay");
const letters = document.getElementsByClassName("letter");
const nums = document.getElementsByClassName("num");

let upperCase = 0;

document.body.addEventListener("keydown", function (index) {
  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase() == index.key.toUpperCase()) {
      button[i].classList.add("active");
      event.preventDefault();
    } else if (index.key == " ") {
      space.classList.add("active");
    } else if (index.key == "Space") {
      space.classList.add("active");
    } else if (index.key == "Escape") {
      esc.classList.add("active");
    } else if (index.key == "Tab") {
      tab.classList.add("active");
    } else if (index.keyCode == 20) {
      capsLock.classList.add("active");
      if (upperCase == 0) {
        for (let i = 0; i < letters.length; i++) {
          letters[i].innerHTML = letters[i].innerHTML.toUpperCase();
          upperCase++;
        }
      } else {
        for (let i = 0; i < letters.length; i++) {
          letters[i].innerHTML = letters[i].innerHTML.toLowerCase();
          upperCase--;
        }
      }
      return;
    } else if (index.key == "Enter") {
      enter.classList.add("active");
    } else if (index.key == "backSpace") {
      backspace.classList.add("active");
    } else if (index.keyCode == 16) {
      tilde.textContent = "~";
      one.textContent = "!";
      two.textContent = "@";
      three.textContent = "#";
      four.textContent = "$";
      five.textContent = "%";
      six.textContent = "^";
      seven.textContent = "&";
      eight.textContent = "*";
      nine.textContent = "(";
      zero.textContent = ")";
      minus.textContent = "_";
      equals.textContent = "+";
      lBracket.textContent = "{";
      rBracket.textContent = "}";
      backslash.textContent = "|";
      forwardslash.textContent = "?";
      semicolon.textContent = ":";
      quote.textContent = '"';
      comma.textContent = "<";
      dot.textContent = ">";

      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lShift.classList.add("active");
      }
    } else if (index.keyCode == 17) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lCtrl.classList.add("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rCtrl.classList.add("active");
      }
    } else if (index.keyCode == 18) {
      lAlt.classList.add("active");
      rAlt.classList.add("active");
    }
  }

  switch (index.key) {
    case "Enter":
      break;
    case "Tab":
      break;
    case "Control":
      break;
    case "Alt":
      break;
    case "AltGraph":
      break;
    case "Shift":
      break;
    default:
      displayText.innerHTML += index.key;
  }

  if (index.key == "Backspace") {
    displayText.innerHTML = displayText.innerHTML.slice(0, -10);
  }
});

document.body.addEventListener("keyup", function (index) {
  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase() == index.key.toUpperCase()) {
      button[i].classList.remove("active");
    } else if (index.keyCode == 32) {
      space.classList.remove("active");
    } else if (index.keyCode == 27) {
      esc.classList.remove("active");
    } else if (index.keyCode == 9) {
      tab.classList.remove("active");
    } else if (index.keyCode == 20) {
      capsLock.classList.remove("active");
    } else if (index.keyCode == 13) {
      enter.classList.remove("active");
    } else if (index.keyCode == 8) {
      backspace.classList.remove("active");
    } else if (index.keyCode == 16) {
      tilde.textContent = "`";
      one.textContent = "1";
      two.textContent = "2";
      three.textContent = "3";
      four.textContent = "4";
      five.textContent = "5";
      six.textContent = "6";
      seven.textContent = "7";
      eight.textContent = "8";
      nine.textContent = "9";
      zero.textContent = "0";
      minus.textContent = "-";
      equals.textContent = "=";
      lBracket.textContent = "[";
      rBracket.textContent = "]";
      backslash.textContent = "\\";
      forwardslash.textContent = "/";
      semicolon.textContent = ";";
      quote.textContent = "'";
      comma.textContent = ",";
      dot.textContent = ".";
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lShift.classList.remove("active");
      }
    } else if (index.keyCode == 17) {
      if (index.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        lCtrl.classList.remove("active");
      } else if (index.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        rCtrl.classList.remove("active");
      }
    } else if (index.keyCode == 18) {
      lAlt.classList.remove("active");
      rAlt.classList.remove("active");
    }
  }
});

for (let x of letters) {
  x.addEventListener("mousedown", function () {
    x.className = "active";
    displayText.innerHTML += x.innerHTML;
  });
}

for (let y of letters) {
  y.addEventListener("mouseup", function () {
    y.className = "";
  });
}

for (let x of nums) {
  x.addEventListener("mousedown", function () {
    x.className = "active";
    displayText.innerHTML += x.innerHTML;
  });
}

for (let y of nums) {
  y.addEventListener("mouseup", function () {
    y.className = "";
  });
}

space.addEventListener("mousedown", function () {
  space.classList.add("active");
  displayText.innerHTML += " ";
});
space.addEventListener("mouseup", function () {
  space.classList.remove("active");
});

function back() {
  backspace.classList.add("active");
  displayText.innerHTML = displayText.innerHTML.slice(0, -1);
}
backspace.onmousedown = back;
backspace.onmouseup = function () {
  backspace.classList.remove("active");
};

tab.addEventListener("mousedown", function () {
  tab.classList.add("active");
});
tab.addEventListener("mouseup", function () {
  tab.classList.remove("active");
});

capsLock.addEventListener("mousedown", function () {
  capsLock.classList.add("active");
  if (upperCase == 0) {
    for (let i = 0; i < letters.length; i++) {
      letters[i].innerHTML = letters[i].innerHTML.toUpperCase();
      upperCase++;
    }
  } else {
    for (let i = 0; i < letters.length; i++) {
      letters[i].innerHTML = letters[i].innerHTML.toLowerCase();
      upperCase--;
    }
  }
});
capsLock.addEventListener("mouseup", function () {
  capsLock.classList.remove("active");
});

lShift.addEventListener("mousedown", function () {
  lShift.classList.add("active");
});
lShift.addEventListener("mouseup", function () {
  lShift.classList.remove("active");
});

rShift.addEventListener("mousedown", function () {
  lShift.classList.add("active");
});
rShift.addEventListener("mouseup", function () {
  lShift.classList.remove("active");
});

lAlt.addEventListener("mousedown", function () {
  lAlt.classList.add("active");
});
lAlt.addEventListener("mouseup", function () {
  lAlt.classList.remove("active");
});

rAlt.addEventListener("mousedown", function () {
  rAlt.classList.add("active");
});
rAlt.addEventListener("mouseup", function () {
  rAlt.classList.remove("active");
});

lCtrl.addEventListener("mousedown", function () {
  lCtrl.classList.add("active");
});
lCtrl.addEventListener("mouseup", function () {
  lCtrl.classList.remove("active");
});

rCtrl.addEventListener("mousedown", function () {
  rCtrl.classList.add("active");
});
rCtrl.addEventListener("mouseup", function () {
  rCtrl.classList.remove("active");
});

enter.addEventListener("mousedown", function () {
  enter.classList.add("active");
});
enter.addEventListener("mouseup", function () {
  enter.classList.remove("active");
});
