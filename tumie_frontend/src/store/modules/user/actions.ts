export default {
    async register(context: any, data: any){

        const response = await fetch(`http://localhost:5000/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        // context.commit('registerUser');
    },
    async login (context: any, data: any){
        const response = await fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        localStorage.setItem("user", JSON.stringify(responseData));

        context.commit('loginUser', responseData);
    },

    logoutUser(context:any, data:any){
        context.commit('logoutUser');
        localStorage.removeItem("user");
    },


    async loadFullUser(context:any, data:any){
        const response = await fetch(`http://localhost:5000/get-user/${data}`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        context.commit('loadFullUser', responseData);
    },
    async updateUser(context:any, data:any){

        const response = await fetch(`http://localhost:5000/update-user`,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
    },

    async getOrders(context:any, data:any){
        const response = await fetch(`http://localhost:5000/orders/${data}`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        context.commit('loadOrders', responseData);
    },

    async getOrder(context:any, data:any){
        const user_id = data.user_id;
        const order_id = data.order_id.id;

        const response = await fetch(`http://localhost:5000/orders/${user_id}/${order_id})`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }

        context.commit('loadSelectedOrder', responseData);
    }

}