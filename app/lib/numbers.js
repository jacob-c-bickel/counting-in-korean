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
  let r = Math.random();
  let maxNumber;
  if (r > 0.75) maxNumber = 99;
  else if (r > 0.5) maxNumber = 999;
  else if (r > 0.4) maxNumber = 9999;
  else if (r > 0.3) maxNumber = 99999;
  else if (r > 0.2) maxNumber = 999999;
  else if (r > 0.1) maxNumber = 9999999;
  else if (r > 0.03) maxNumber = 999999999;
  else maxNumber = 999999999999;

  const number = Math.ceil(Math.random() * maxNumber);
  const hangul = numberToHangul(number, "sino");
  const romanized = hangulRomanization.convert(hangul);
  return { number, hangul, romanized };
}

const nativeOnes = ["", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉"];
const nativeTens = ["", "열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔"];
const sinoDigits = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const sinoGroups = ["", "만", "억"];

/**
 * Takes in a number and returs it in Hangul.
 * @param {number} n - The number to convert
 * @param {string} mode The number type to use, either "native" or "sino"
 * @returns {(string|undefined)}
 */
export function numberToHangul(n, mode) {
  if (!(typeof n === "number")) return;
  if (!["native", "sino"].includes(mode)) return;

  let hangul = "";

  if (mode === "native") {
    if (n < 1 || n > 99) return;

    const numberString = n.toString().padStart(2, "0");
    hangul += nativeTens[numberString[0]];
    hangul += nativeOnes[numberString[1]];
    return hangul;
  }

  if (mode === "sino") {
    if (n === 0) return "영";

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
