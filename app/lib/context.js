import { choose } from "./choose.js";
import generateTime from "./generators/time";
import generateMoney from "./generators/money";

/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

const generatorChoices = [
  [0.5, generateTime],
  [0.5, generateMoney],
];

export function generateContextPhrase() {
  let generator = choose(generatorChoices);
  return generator();
}
