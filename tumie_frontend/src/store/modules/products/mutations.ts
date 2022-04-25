export default {
    loadProducts(state: any, payload: any){
        state.products = payload;
    },
    loadProduct(state: any, payload: any){
        state.selectedProduct = payload;
    },
    loadCategoryProducts(state: any, payload: any){
        state.products = payload;
    },
    loadRelatedProducts(state:any, payload:any){
        state.relatedProducts = payload;
    },
    loadCatsProducts(state:any, payload:any){
        state.products = payload;
    },
    loadLatestProducts(state:any, payload:any){
        state.latestProducts = payload;
    },
    searchProduct(state:any,payload:any){
        console.log(payload.toLowerCase());
        const newState = state.products.filter((product:any) => {
            return product.title.toLowerCase().includes(payload.toLowerCase())
        });
        state.products = newState;
    },
    filterByPrice(state:any, payload:any){
        const minPrice = +payload.minPrice;
        const maxPrice = +payload.maxPrice;
        const newState = state.products.filter((product:any) => {
            return product.price >= minPrice && product.price <= maxPrice
        });
        console.log(newState);
        state.products = newState;
    },
    sortByPopularity(state:any, payload:any){
        const newState = state.products.sort((a:any, b:any) => {
            return b.rating - a.rating;
        });
        state.products = newState;
    },
    sortByNewness(state:any, payload:any){
        const newState = state.products.sort((a:any, b:any) => {
            return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf();
        });
        state.prodcts = newState;
    },
    sortByPrice(state:any, payload:any){
        const newState = state.products.sort((a:any, b:any) => {
            return b.price - a.price
        });
        state.prodcts = newState;
    }

}