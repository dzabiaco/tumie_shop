import updateLocalstorageCart from "../../../../util/updateLocalstorageCart";

export default {
    loadCartProducts(state: any, payload: any){
        state.products = payload;
    },
    addToCart(state:any, payload:any){

        const cart_product = {
            ...payload
        };

        state.cart_products.push(cart_product);
        // updateLocalstorageCart(cart_product);

        // const cart = JSON.parse(<string>localStorage.getItem("cart"));
        // cart.push(cart_product);
        //
        // localStorage.setItem("cart", JSON.stringify(cart));
    },

    removeFromCart(state:any, payload:any){
        const index = state.cart_products.findIndex((obj:any) => obj.uuid === payload);
        state.cart_products.splice(index,1);
    },
    resetCart(state:any){
        state.cart_products = [];
    }

}