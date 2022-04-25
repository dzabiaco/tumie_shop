import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    state(){
        return {
            user:JSON.parse(<string>localStorage.getItem('user')) || null,
            full_user: null,
            orders: [],
            selected_order: null
        }
    },
    mutations,
    getters,
    actions
}