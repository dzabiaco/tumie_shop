import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    namespaced: true,
    state(){
        return {
            products: [],
            selectedProduct: null,
            relatedProducts: [],
            latestProducts:[]
        }
    },
    mutations,
    getters,
    actions
}