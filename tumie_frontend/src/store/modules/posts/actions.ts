export default {
    async loadPosts(context: any, data: any){
        const response = await fetch(`http://localhost:5000/fetch-posts`);

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadPosts', responseData);
    },
    async loadPost(context:any, data:any) {
        const response = await fetch(`http://localhost:5000/fetch-posts/${data}`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadPost', responseData)
    },
    async getRelatedPosts(context: any, data: any){
        const response = await fetch(`http://localhost:5000/fetch-related-posts`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || `Something went wrong`);
            throw error;
        }
        context.commit('loadRelatedPosts', responseData)
    }
}