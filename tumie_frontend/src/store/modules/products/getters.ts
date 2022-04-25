export default {
    products(state:any){
        return state.products;
    },
    productsLength(state: any){
        return state.products.length
    },
    hasProducts(state: any){
        return state.products && state.products.length > 0;
    },
    selectedProduct(state: any){
        return state.selectedProduct;
    },
    relatedProduct(state: any){
        return state.relatedProducts;
    },

    allProductsLength(state:any){
        return state.products.length;
    },
    latestProducts(state:any){
        return state.latestProducts;
    }

}