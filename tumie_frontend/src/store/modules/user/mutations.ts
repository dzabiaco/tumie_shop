export default {
    loginUser(state: any, payload: any){
        state.user = payload;
    },
    logoutUser(state: any, payload: any) {
        localStorage.removeItem('user');
        state.user = null;
    },
    loadFullUser(state:any, payload:any){
        state.full_user = payload;
    },
    loadOrders(state:any, payload:any){
        state.orders = payload;
    },
    loadSelectedOrder(state:any, payload:any){
        state.selected_order = payload;
    }

}