// Get elements from the DOM
const inputValue = document.getElementById("inputValue");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Conversion rates
const conversionRates = {
  cm: {
    m: 0.01,
    km: 0.00001,
    in: 0.393701,
    ft: 0.0328084,
    yd: 0.0109361,
    mi: 0.00000621371,
  },
  m: {
    cm: 100,
    km: 0.001,
    in: 39.3701,
    ft: 3.28084,
    yd: 1.09361,
    mi: 0.000621371,
  },
  km: {
    cm: 100000,
    m: 1000,
    in: 39370.1,
    ft: 3280.84,
    yd: 1093.61,
    mi: 0.621371,
  },
  in: {
    cm: 2.54,
    m: 0.0254,
    km: 0.0000254,
    ft: 0.0833333,
    yd: 0.0277778,
    mi: 0.000015783,
  },
  ft: {
    cm: 30.48,
    m: 0.3048,
    km: 0.0003048,
    in: 12,
    yd: 0.333333,
    mi: 0.000189394,
  },
  yd: {
    cm: 91.44,
    m: 0.9144,
    km: 0.0009144,
    in: 36,
    ft: 3,
    mi: 0.000568182,
  },
  mi: {
    cm: 160934,
    m: 1609.34,
    km: 1.60934,
    in: 63360,
    ft: 5280,
    yd: 1760,
  },
};

// Event listener for the convert button
convertBtn.addEventListener("click", convertUnits);

// Conversion function
function convertUnits() {
  const value = parseFloat(inputValue.value);
  const from = unitFrom.value;
  const to = unitTo.value;

  if (!isNaN(value)) {
    const convertedValue = value * conversionRates[from][to];
    result.textContent = `${value} ${from} is equal to ${convertedValue.toFixed(
      2
    )} ${to}`;
  } else {
    result.textContent = "Please enter a valid number";
  }
}
