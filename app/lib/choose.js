/**
 * @description Choose a value from an array of weighted choices.
 * @param {[][]} choices - An array of choices, which are two item arrays consisting of a probability then value.
 * @return {any} - The value of the selected choice.
 */
export function choose(choices) {
  let r = Math.random();
  let oddSum = 0;
  return choices.find((choice) => {
    oddSum += choice[0];
    return r < oddSum;
  })[1];
}
