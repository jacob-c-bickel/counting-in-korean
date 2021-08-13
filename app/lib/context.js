import { choose } from "./choose.js";
import generateTime from "./generators/time";
import generateMoney from "./generators/money";
import generatePhoneNumber from "./generators/phoneNumber.js";
import generateDate from "./generators/date.js";
import generateAge from "./generators/age.js";
import generateCount from "./generators/count.js";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} englishNote
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

const generatorChoices = [
  [0.1, generateTime],
  [0.1, generateMoney],
  [0.1, generatePhoneNumber],
  [0.1, generateDate],
  [0.1, generateAge],
  [0.5, generateCount],
];

export function generateContextPhrase() {
  let generator = choose(generatorChoices);
  return generator();
}
