export default {
    async loadProducts(context: any, data: any){
        const response = await fetch(`http://localhost:5000/fetch-products`);

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadProducts', responseData);
    },
    async loadProduct(context:any, data:any) {
        const response = await fetch(`http://localhost:5000/fetch-products/${data}`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadProduct', responseData)
    },

    async getRelatedProducts(context: any, data: any){
        const response = await fetch(`http://localhost:5000/fetch-related-products?category=${data}`)
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadRelatedProducts', responseData)
    },

    async getProductsFromCategory(context: any, data: any){
        const response = await fetch(`http://localhost:5000/fetch-category-products?category=${data}`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadCatsProducts', responseData.category_products)
    },
    async loadLatestProducts(context:any, data:any){
        const response = await fetch(`http://localhost:5000/get_latest_products`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        context.commit('loadLatestProducts',responseData);
    },
    searchProduct(context:any, data:any){
        context.commit('searchProduct', data);
    },
    filterByPrice(context:any, data:any){
        context.commit('filterByPrice', data);
    },
    sortByPopularity(context:any, data:any){
        context.commit('sortByPopularity');
    },
    sortByNewness(context:any, data:any){
        context.commit('sortByNewness');
    },
    sortByPrice(context:any, data:any){
        context.commit('sortByPrice')
    }
}