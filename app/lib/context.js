import { choose } from "./choose.js";
import generateTime from "./generators/time";
import generateMoney from "./generators/money";
import generatePhoneNumber from "./generators/phoneNumber.js";
import generateDate from "./generators/date.js";
import generateAge from "./generators/age.js";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} englishNote
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

const generatorChoices = [
  [0.2, generateTime],
  [0.2, generateMoney],
  [0.2, generatePhoneNumber],
  [0.2, generateDate],
  [0.2, generateAge],
];

export function generateContextPhrase() {
  let generator = choose(generatorChoices);
  return generator();
}
