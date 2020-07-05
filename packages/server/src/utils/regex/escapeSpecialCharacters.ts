/**
 * Function that return a string based on input without special characters(e.g.: -{}()*+?.,)
 * @param text - String that contains special characters
 */
const escapeSpecialCharacters = (text: string) =>
  text.replace(/[-[\]{}()*+?.,\\^$|#]/g, '');

export default escapeSpecialCharacters;
