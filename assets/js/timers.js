let arr = [
  "",
  "M",
  "ME",
  "MEC",
  "MECH",
  "MECHA",
  "MECHAN",
  "MECHANI",
  "MECHANIC",
  "MECHANICS",
  "MECHANICS",
  "MECHANICS",
  "MECHANIC",
  "MECHANI",
  "MECHAN",
  "MECHA",
  "MECH",
  "MEC",
  "ME",
  "M",
  "",
  "C",
  "CO",
  "COM",
  "COMP",
  "COMPU",
  "COMPUT",
  "COMPUTI",
  "COMPUTIN",
  "COMPUTING",
  "COMPUTING",
  "COMPUTING",
  "COMPUTIN",
  "COMPUTI",
  "COMPUT",
  "COMPU",
  "COMP",
  "COM",
  "CO",
  "C",
  "",
  "E",
  "EL",
  "ELE",
  "ELEC",
  "ELECT",
  "ELECTR",
  "ELECTRO",
  "ELECTRON",
  "ELECTRONI",
  "ELECTRONIC",
  "ELECTRONICS",
  "ELECTRONICS",
  "ELECTRONICS",
  "ELECTRONIC",
  "ELECTRONI",
  "ELECTRON",
  "ELECTRO",
  "ELECTR",
  "ELECT",
  "ELEC",
  "ELE",
  "EL",
  "E",
]; // 64 array size

let blink = document.querySelector(".blink");
let header_text = document.querySelector(".header-text");
header_text.style.fontSize = "4vw";
header_text.style.width = "100%";
header_text.style.paddingLeft = "10vw";
header_text.style.textAlign = "left";
let a = 0;
let blink_callback = function () {
  if (a == 64) {
    a = 0;
  }
  blink.textContent = arr[a];
  a++;
};

setInterval(blink_callback, 100);
