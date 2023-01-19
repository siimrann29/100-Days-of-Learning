"use strict";

const flight = "JK123";
const jonas = {
  name: "Jonas Chugh",
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "JK1234";
  passenger.name = "Ms. " + passenger.name;

  if (passenger.passport === 12345678) {
    alert("Checked In");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

/*Passing by reference is not available in JAVASCRIPT*/
