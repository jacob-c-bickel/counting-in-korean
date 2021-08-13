const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "@lib/numbers";
import Counters from "@lib/data/counters";

export default function countGenerator() {
  const itemCounters = Counters.filter((c) => c.items);
  let counter = itemCounters[Math.floor(Math.random() * itemCounters.length)];
  let item = counter.items[Math.floor(Math.random() * counter.items.length)];
  let number =
    Math.floor(Math.random() * ((item.maxAmount || counter.maxAmount) - (counter.minAmount || 1))) +
    (counter.minAmount || 1);

  let mode = number < 50 ? "native-counting" : "sino";
  if (counter.numberSystem === "Sino") mode = "sino";

  let english;
  if (counter.ordinal) {
    let ext = "th";
    if (number % 10 === 1 && number !== 11) ext = "st";
    if (number % 10 === 2 && number !== 12) ext = "nd";
    if (number % 10 === 3 && number !== 13) ext = "rd";
    english = `${number}${ext} ${item.english[+(number !== 1)]}`;
  } else {
    english = `${number} ${item.english[+(number !== 1)]}`;
  }

  let hangulPrefix = "";
  if (counter.hangul === "도") {
    if (number < 0) {
      number = Math.abs(number);
      hangulPrefix = "영하 ";
    }
  }

  let hangul = `${hangulPrefix}${item.hangul} ${numberToHangul(number, mode)} ${
    counter.hangul
  }`.trim();

  return {
    english: english,
    englishNote: counter.note,
    hangul: hangul,
    romanized: hangulRomanization.convert(hangul),
    notes: [],
  };
}
