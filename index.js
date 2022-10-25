let formEl = document.getElementById("formEl");
let nameEl = document.getElementById("name");
let numEl = document.getElementById("num");
let cvvEl = document.getElementById("cvv");
let monEl = document.getElementById("mon");
let yearEl = document.getElementById("year");

let userNameEl = document.getElementById("userName");
let userNumEl = document.getElementById("userNum");
let userCvvEl = document.getElementById("userCvv");
let userMonYearEl = document.getElementById("userMonYear");

let updatedUserName = "";
let updatedUserCardNo = "";
let updatedCvvEl = "";
let updatedMon = "";
let updatedYear = "";

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(updatedUserCardNo);
  console.log(updatedUserName);
  console.log(updatedCvvEl);
  console.log(updatedMon);
  console.log(updatedYear);

  if (
    updatedUserName === "" &&
    updatedUserCardNo === "" &&
    updatedCvvEl === "" &&
    updatedMon === "" &&
    updatedYear === ""
  ) {
    alert("Please provide all Values");
  } else if (updatedUserName === " ") {
    alert("please provide name");
  } else if (updatedUserCardNo === " ") {
    alert("Please provide cardNo");
  } else if (updatedCvvEl === "") {
    alert("please provide CVV");
  } else if (updatedMon && updatedYear === " ") {
    alert("please provide MM/YY");
  } else {
    userNameEl.textContent = updatedUserName;
    userNumEl.textContent = updatedUserCardNo;
    userCvvEl.textContent = updatedCvvEl;
    userMonYearEl.textContent = `${updatedMon}/${updatedYear}`;
  }
});

nameEl.addEventListener("change", (e) => {
  updatedUserName = e.target.value;
});

numEl.addEventListener("change", (e) => {
  updatedUserCardNo = e.target.value;
});

cvvEl.addEventListener("change", (e) => {
  updatedCvvEl = e.target.value;
});

monEl.addEventListener("change", (e) => {
  updatedMon = e.target.value;
});

yearEl.addEventListener("change", (e) => {
  updatedYear = e.target.value;
});
