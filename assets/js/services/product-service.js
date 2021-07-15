import axios from 'axios';

/**
 *
 * @param {string|null} categoryIri
 * @returns {Promise}
 */
export function fecthProducts(categoryIri) {
    const params = {};
    if (categoryIri) {
        params.category = categoryIri;
    }
    return axios.get('/api/products', {
        params,
    });
}
