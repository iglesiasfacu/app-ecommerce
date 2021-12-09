const getProducts = async (search) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=20`
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json;
}

export default getProducts;