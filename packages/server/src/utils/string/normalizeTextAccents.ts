/**
 * Function that return a string without accents. ex: "São Paulo" as input
 * returns "Sao Paulo"
 * @param text  - String that will be normalized
 */
const normalizeTextAccents = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default normalizeTextAccents;
