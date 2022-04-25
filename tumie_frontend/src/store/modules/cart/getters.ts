export default {
    products(state:any){
        return state.cart_products;
    },
    productsLength(state: any){
        return state.cart_products.length
    },
    hasProducts(state: any){
        return state.cart_products && state.cart_products.length > 0;
    },
    totalPrice(state:any){
        const price = state.cart_products.reduce((result:any, product:any) => {
            result += Number(product.price);
            return result;
        }, 0);
        return price;
    }

}