/**
 * Converte um nome de curso em slug para URL (ex: "Rigger (Sinaleiro/Amarrador
 * de Cargas)" -> "rigger-sinaleiro-amarrador-de-cargas").
 */
export function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
