const hangulRomanization = require("hangul-romanization");
import { numberToHangul } from "@lib/numbers";
import { choose } from "../choose";

const banknoteValues = [10, 50, 100, 500, 1000, 5000, 10000, 50000];

export default function generateMoney() {
  let amount = 0;
  let amountType = choose([
    [0.25, "banknote"],
    [0.25, "random"],
    [0.5, "rounded"],
  ]);
  if (amountType === "banknote") {
    amount = banknoteValues[Math.floor(Math.random() * banknoteValues.length)];
  } else if (amountType === "random") {
    amount = Math.floor(Math.random() * 10000) + 1;
  } else {
    amount = (Math.floor(Math.random() * 100) + 1) * 10;
    for (let i = 0; i < 5; i++) {
      if (Math.random() < 0.3) {
        amount *= 10;
      }
    }
  }

  let hangul = numberToHangul(amount, "sino") + " 원";
  return {
    english: "₩" + amount.toLocaleString(),
    hangul: hangul,
    romanized: hangulRomanization.convert(hangul),
    notes: [],
  };
}
