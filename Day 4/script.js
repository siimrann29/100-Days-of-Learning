//forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log("you Deposited ${movement}");
  } else {
    console.log("you withdrew ${Math.abs(movement)}");
  }
});

//i is index and arr is array
//continue and break cannot be used in forEach

//ForEach with maps and sets

//MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.groupCollapsed("${key} :${value}");
});

//SETS
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR"]);
