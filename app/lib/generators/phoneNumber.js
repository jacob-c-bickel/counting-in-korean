const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "@lib/numbers";

const areaCodes = [
  "02",
  "031",
  "032",
  "033",
  "041",
  "042",
  "043",
  "044",
  "049",
  "051",
  "052",
  "053",
  "054",
  "055",
  "061",
  "062",
  "063",
  "064",
];

export default function generatePhoneNumber() {
  // Generate number
  let abroad = Math.random() < 0.2;

  let areaCode;
  if (abroad || Math.random() < 0.8) {
    areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  }
  if (abroad) {
    areaCode = parseInt(areaCode).toString();
  }

  let centralNumber = "";
  for (let i = 0; i < 3; i++) {
    centralNumber += Math.floor(Math.random() * 10);
  }

  let subscriberNumber = "";
  for (let i = 0; i < 4; i++) {
    subscriberNumber += Math.floor(Math.random() * 10);
  }

  // Compose english
  let english = "";
  if (abroad) english += "+82-";
  if (areaCode) english += areaCode + "-";
  english += centralNumber + "-" + subscriberNumber;

  // Compose hangul
  let hangul = "";
  for (let c of english) {
    let d = parseInt(c);
    if (!isNaN(d)) {
      hangul += numberToHangul(d, "sino-phone") + " ";
    }
  }

  return {
    english: english,
    hangul: hangul,
    romanized: hangulRomanization.convert(hangul),
    notes: [],
  };
}
