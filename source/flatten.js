/**
 * Преобразует вложенный массив в плоский
 *
 * @param {Array} array Вложенный массив
 * @returns {Array} Плоский массив без вложенных массивов
 *
 * @example
 * // returns [1, 2, 3]
 * flatten([1, [2, 3]]);
 * @returns {Array}
 */
const flatten = array => {
    return array.reduce(
        (result, item) =>
            result.concat(Array.isArray(item) ? flatten(item) : item),
        []
    );
};