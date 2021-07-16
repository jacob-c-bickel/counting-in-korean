const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "./numbers";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

function moneyGenerator() {
  return {
    english: "1000 won",
    hangul: "천 원",
    romanized: "cheon won",
    notes: ["money  note"],
  };
}

function phoneNumberGenerator() {
  return {
    english: "(010) 123-4567",
    hangul: "(공일공) 일이삼-사오육칠",
    romanized: "yeah yeah yeah",
    notes: ["When reading aloud,  하나 may be used for 1 instead."],
  };
}

function addressGenerator() {
  return {
    english: "123 First Street",
    hangul: "일이삼 First 길",
    romanized: "cant be bothered",
    notes: [],
  };
}

function generateTime() {
  // Choose AM, PM, or 24hr
  let period = "";
  let r = Math.random();
  if (r < 0.475) {
    period = "am";
  } else if (r < 0.95) {
    period = "pm";
  } else {
    period = "24hr";
  }

  // Choose hour and minutes
  let hour = Math.floor(Math.random() * 12) + 1;
  if (period === "24hr" && Math.random() < 0.5) {
    hour += 12;
  }
  let minutes = Math.random() < 0.15 ? 30 : Math.floor(Math.random() * 60) + 1;

  // Compose english
  let english = "";
  if (period != "24hr") {
    english += hour + ":" + minutes.toString().padStart(2, "0");
    english += period === "am" ? " AM" : " PM";
  } else {
    english += hour.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  }

  // Compose hangul
  let hangul = "";
  if (period != "24hr") {
    hangul += period === "am" ? "오전 " : "오후 ";
    hangul += numberToHangul(hour, "native") + "시 ";
    hangul += minutes === 30 ? "반" : numberToHangul(minutes, "sino") + "분";
  } else {
    hangul += numberToHangul(hour, "sino") + "시 ";
    hangul += numberToHangul(minutes, "sino") + "분";
  }

  // Romanize
  let romanized = hangulRomanization.convert(hangul);

  // Notes
  let notes = [
    period === "24hr" && "Military time (24 hour clock) uses Sino numbers for the hours.",
    minutes === 30 && '반 (literally "half") means "half past" and may be used instead of 삼십.',
  ].filter(Boolean);

  return { english, hangul, romanized, notes };
}

function ageGenerator() {}
function monthGenerator() {}
function dateGenerator() {}
function measurementGenerator() {}

const generators = [
  { odds: 1, generator: generateTime },
  { odds: 0.33, generator: moneyGenerator },
  { odds: 0.33, generator: phoneNumberGenerator },
  { odds: 0.34, generator: addressGenerator },
  { odds: 0.34, generator: ageGenerator },
  { odds: 0.34, generator: monthGenerator },
  { odds: 0.34, generator: dateGenerator },
  { odds: 0.34, generator: measurementGenerator },
];

export function generateContextPhrase() {
  let r = Math.random();
  let oddSum = 0;
  let generator = generators.find((e) => {
    oddSum += e.odds;
    return r < oddSum;
  }).generator;
  return generator();
}
