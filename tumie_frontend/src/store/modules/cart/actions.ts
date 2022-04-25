export default {
    async addToCart(context: any, data: any){
        context.commit('addToCart', data);
    },
    async removeFromCart(context:any, data:any){
        context.commit('removeFromCart', data);
    },

    async sendOrder(context:any, data:any){
        const userId = data.userId;
        const order = {...data};
        delete order["userId"];

        const response = await fetch(`http://localhost:5000/save-order/${userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
    },

    resetCart(context:any, data:any){
        context.commit('resetCart');
    }

}