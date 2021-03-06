const hangulRomanization = require("hangul-romanization");

/**
 * @typedef {Object} PracticeNumber
 * @property {number} number - The actual number.
 * @property {string} hangul - The number's Native or Sino hangul form.
 * @property {string} romanized - The romanization of the number's Native or Sino form.
 */

/**
 * Generates a number for Native number practice.
 * @returns {PracticeNumber}
 */
export function generateNativeNumber() {
  const number = Math.ceil(Math.random() * 99);
  const hangul = numberToHangul(number, "native");
  const romanized = hangulRomanization.convert(hangul);
  return { number, hangul, romanized };
}

/**
 * Generates a number for Sino number practice.
 * @returns {PracticeNumber}
 */
export function generateSinoNumber() {
  let number = Math.floor(Math.random() * 100) + 1;
  for (let i = 0; i < 3; i++) {
    let r = Math.random();
    if (r < 0.1) {
      number *= 1000;
    } else if (r < 0.15) {
      number *= 1000;
      number += Math.floor(Math.random() * 10);
    } else if (r < 0.225) {
      number *= 1000;
      number += Math.floor(Math.random() * 10) * 10;
    } else if (r < 0.325) {
      number *= 1000;
      number += Math.floor(Math.random() * 10) * 100;
    }
  }

  const hangul = numberToHangul(number, "sino");
  const romanized = hangulRomanization.convert(hangul);
  return { number, hangul, romanized };
}

const nativeOnes = ["", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉"];
const nativeTens = ["", "열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔"];
const nativeCountingOnes = ["", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉"];
const sinoDigits = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const sinoGroups = ["", "만", "억"];

/**
 * Takes in a number and returs it in Hangul.
 * @param {number} n - The number to convert
 * @param {string} mode The number type to use, either "native", "native-counting", "sino", or "sino-phone"
 * @returns {(string|undefined)}
 */
export function numberToHangul(n, mode) {
  if (!(typeof n === "number")) return;
  if (!["native", "native-counting", "sino", "sino-phone"].includes(mode)) return;

  let hangul = "";

  if (mode === "native") {
    if (n < 1 || n > 99) return;

    const numberString = n.toString().padStart(2, "0");
    hangul += nativeTens[numberString[0]];
    hangul += nativeOnes[numberString[1]];
    return hangul;
  }

  if (mode === "native-counting") {
    if (n < 1 || n > 99) return;
    if (n === 20) return "스무";

    const numberString = n.toString().padStart(2, "0");
    hangul += nativeTens[numberString[0]];
    hangul += nativeCountingOnes[numberString[1]];
    return hangul;
  }

  if (mode === "sino" || mode === "sino-phone") {
    if (n === 0) {
      if (mode === "sino-phone") return "공";
      return "영";
    }

    let numberString = n.toString();
    numberString = numberString.padStart(
      numberString.length + 4 - (numberString.length % 4 || 4),
      "0"
    );
    let group = Math.ceil(numberString.length / 4) - 1;

    for (let i = 0; i < numberString.length; i += 4) {
      let thousands = numberString[i];
      if (thousands === "1") hangul += "천";
      else if (thousands !== "0") hangul += sinoDigits[thousands] + "천";

      let hundreds = numberString[i + 1];
      if (hundreds === "1") hangul += "백";
      else if (hundreds !== "0") hangul += sinoDigits[hundreds] + "백";

      let tens = numberString[i + 2];
      if (tens === "1") hangul += "십";
      else if (tens !== "0") hangul += sinoDigits[tens] + "십";

      let ones = numberString[i + 3];
      if (ones !== "0") hangul += sinoDigits[ones];

      hangul += sinoGroups[group] + " ";
      group -= 1;
    }
    return hangul.trim();
  }
}
