const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "@lib/numbers";

export default function generateDate() {
  // Generate year
  let year;
  let r = Math.random();
  if (r < 0.1) {
    year = Math.floor(Math.random() * 400) + 1400;
  } else if (r < 0.3) {
    year = Math.floor(Math.random() * 160) + 1800;
  } else if (r < 0.6) {
    year = Math.floor(Math.random() * 55) + 1960;
  } else {
    year = Math.floor(Math.random() * 10) + 2015;
  }
  let includeYear = Math.random() < 0.5;

  // Generate date
  const start = new Date(year, 0, 1).getTime();
  const end = new Date(year, 11, 31).getTime();
  const date = new Date(start + Math.random() * (end - start));

  // Compose english
  let english = date.toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  if (!includeYear) english = english.split(",")[0];

  // Compose hangul
  let hangul = "";
  if (includeYear) {
    hangul += numberToHangul(year, "sino") + "년 ";
  }
  hangul += numberToHangul(date.getMonth() + 1, "sino") + "월 ";
  hangul += numberToHangul(date.getDate(), "sino") + "일";

  return {
    english: english,
    hangul: hangul,
    romanized: hangulRomanization.convert(hangul),
    notes: [],
  };
}
