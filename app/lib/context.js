/**
 * @typedef {Object} ContextPhrase
 * @property {string} english
 * @property {string} hangul
 * @property {string} romanized
 * @property {string[]} notes
 */

export function generateContextPhrase() {
  return {
    english: "Test English",
    hangul: "태스트 한글",
    romanized: "test romanization",
    notes: ["First note.", "Second note."],
  };
}
