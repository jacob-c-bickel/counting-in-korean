import { choose } from "./choose.js";
import generateTime from "./generators/time";
import generateMoney from "./generators/money";
import generatePhoneNumber from "./generators/phoneNumber.js";
import generateDate from "./generators/date.js";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

const generatorChoices = [
  [0.25, generateTime],
  [0.25, generateMoney],
  [0.25, generatePhoneNumber],
  [0.25, generateDate],
];

let c = 0;

export function generateContextPhrase() {
  c += 1;
  console.log("generate context phrase: " + c);
  let generator = choose(generatorChoices);
  return generator();
}
