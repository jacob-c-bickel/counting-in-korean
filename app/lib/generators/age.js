const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "../numbers";

export default function generateAge() {
  const r = Math.random();
  let age;
  let system;
  if (r < 0.5) {
    age = Math.floor(Math.random() * 40) + 1;
    system = "native";
  } else {
    age = Math.floor(Math.random() * 100) + 10;
    system = "sino";
  }

  let english = `${age} years old`;
  let hangul;
  if (system === "native") {
    hangul = numberToHangul(age, "native-counting") + " 살";
  } else {
    hangul = numberToHangul(age, "sino") + " 세";
  }

  return {
    english,
    englishNote: system,
    hangul,
    romanization: hangulRomanization.convert(hangul),
    notes: [],
  };
}
