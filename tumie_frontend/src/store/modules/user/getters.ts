export default {
    user(state:any){
        return state.user;
    },
    username(state:any){
        return state.user.username;
    },
    hasToken(state: any){
        return state.user && state.user.token;
    },
    userId(state:any){
        return state.user.user_id;
    },
    fullUserInfo(state:any){
        return state.full_user;
    },
    isAuthenticated(state:any){
        return !!state.user
    },
    // user_orders(state:any){
    //     const full_user = state.full_user;
    //     return full_user.orders || [];
    // },
    userOrders(state:any){
        return state.orders;
    },
    selectedOrder(state:any){
        return state.selected_order;
    },
    totalPrice(state:any){
        const price = state.full_user.orders.reduce((result:any, product:any) => {
            result += Number(product.price);
            return result;
        }, 0);
        return price;
    }
}