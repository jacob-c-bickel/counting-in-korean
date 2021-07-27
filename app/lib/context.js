import { choose } from "./choose.js";
import generateTime from "./generators/time";
import generateMoney from "./generators/money";
import generatePhoneNumber from "./generators/phoneNumber.js";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

const generatorChoices = [
  [0.33, generateTime],
  [0.34, generateMoney],
  [0.33, generatePhoneNumber],
];

export function generateContextPhrase() {
  let generator = choose(generatorChoices);
  return generator();
}
